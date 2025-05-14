import * as vscode from 'vscode';
import { Timer } from './timer';
import { GitPusher } from './git';
import { Dashboard } from './dashboard';

let timer = new Timer();
let dashboard: Dashboard | undefined;

export function activate(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration('clockedin');
  if (!config.get<boolean>('enabled')) {
    console.log('CLockedIn is disabled via settings');
    return;
  }
  console.log('CLockedIn active');

  const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
  statusBar.text = `CLockedIn: ${timer.formatTime()}`;
  statusBar.show();
  context.subscriptions.push(statusBar);

  // Commands
  context.subscriptions.push(
    vscode.commands.registerCommand('clockedin.startTimer', () => {
      if (!config.get<boolean>('enabled')) {
		return;
		}
      if (!timer.isRunning()) {
		timer.start();
		}
      vscode.window.showInformationMessage('Timer started');
    }),
    vscode.commands.registerCommand('clockedin.showStats', () => {
      if (!config.get<boolean>('enabled')) {
		return;
		}
      vscode.window.showInformationMessage(timer.summary());
    }),
    vscode.commands.registerCommand('clockedin.showDashboard', () => {
      if (!config.get<boolean>('enabled')) {
        return;
    }
      if (!dashboard) {
        dashboard = new Dashboard(context.extensionUri);
      }
      dashboard.show();
      dashboard.update(timer.summary());
    })
  );

  // Auto start/stop
  context.subscriptions.push(
    vscode.workspace.onDidOpenTextDocument(() => {
      if (config.get<boolean>('enabled') && !timer.isRunning()) {
        timer.start();
    }
    }),
    vscode.workspace.onDidCloseTextDocument(async () => {
      if (!config.get<boolean>('enabled')) {
        return;
    }
      if (timer.isRunning() && vscode.workspace.textDocuments.length === 0) {
        timer.stop();
        const summary = timer.summary();
        vscode.window.showInformationMessage(summary);

        const repoUrl = await vscode.window.showInputBox({ prompt: 'Enter GitHub repo URL to push code:' });
        if (!repoUrl) {
            vscode.window.showErrorMessage('No repo URL provided. Skipping Git push.');
            return;
        }
        const commitMsg = await vscode.window.showInputBox({ prompt: 'Enter commit message:' });
        if (!commitMsg) {
            vscode.window.showErrorMessage('No commit message provided. Skipping Git push.');
            return;
        }

        try {
          const pusher = new GitPusher(repoUrl);
          await pusher.pushAll(commitMsg);
          vscode.window.showInformationMessage('Code committed & pushed!');
        } catch (err: any) {
          vscode.window.showErrorMessage('Git push failed: ' + err.message);
        }

        dashboard?.update(summary);
      }
    })
  );

  // Tick
  setInterval(() => {
    if (!config.get<boolean>('enabled')) {
        return;
    }
    if (timer.isRunning()) {
      statusBar.text = `CLockedIn: ${timer.formatTime()}`;
      dashboard?.update(timer.summary());
    }
  }, 1000);
}

export function deactivate() {
  if (timer.isRunning()) {
    timer.stop();
  }
}