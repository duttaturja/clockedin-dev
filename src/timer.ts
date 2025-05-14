export class Timer {
  private startTime: number | null = null;
  private endTime: number | null = null;

  start() {
    this.startTime = Date.now();
    this.endTime = null;
  }

  stop() {
    this.endTime = Date.now();
  }

  isRunning(): boolean {
    return this.startTime !== null && this.endTime === null;
  }

  elapsedSeconds(): number {
    if (!this.startTime) {
      return 0;
    }
    return Math.floor(((this.endTime || Date.now()) - this.startTime) / 1000);
  }

  summary(): string {
    const secs = this.elapsedSeconds();
    return `Time spent: ${secs}s`;
  }
}