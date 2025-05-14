import * as vscode from 'vscode';
import { getNonce } from './utils';

export class Dashboard {
  private panel: vscode.WebviewPanel;

  constructor(extensionUri: vscode.Uri) {
    this.panel = vscode.window.createWebviewPanel(
      'clockedinDashboard',
      'CLockedIn Dashboard',
      vscode.ViewColumn.One,
      { enableScripts: true }
    );
    this.panel.webview.html = this.getHtml('Waiting for data...');
  }

  show() {
    this.panel.reveal(vscode.ViewColumn.One);
  }

  update(text: string) {
    this.panel.webview.postMessage({ command: 'update', text });
  }

  private getHtml(initial: string) {
    const nonce = getNonce();
    return `
    <!DOCTYPE html>
    <html>
    <body>
      <h1>CLockedIn</h1>
      <div id="content">${initial}</div>
      <script nonce="${nonce}">
        const vscode = acquireVsCodeApi();
        window.addEventListener('message', e => {
          document.getElementById('content').innerText = e.data.text;
        });
      </script>
    </body>
    </html>`;
  }
}