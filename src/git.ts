import simpleGit, { SimpleGit } from 'simple-git';
import * as path from 'path';
import * as fs from 'fs';

export class GitPusher {
  private git: SimpleGit;
  constructor(private repoUrl: string) {
    this.git = simpleGit();
  }

  async pushAll(commitMsg: string) {
    // Initialize or set remote
    if (!fs.existsSync(path.join('.git'))) {
      await this.git.init();
    }
    const remotes = await this.git.getRemotes(true);
    if (!remotes.find(r => r.name === 'origin')) {
      await this.git.addRemote('origin', this.repoUrl);
    }

    await this.git.add('./*');
    await this.git.commit(commitMsg);
    await this.git.push('origin', 'main');
  }
}