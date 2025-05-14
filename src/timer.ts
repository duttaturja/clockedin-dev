// src/timer.ts
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

  /** total elapsed seconds */
  elapsedSeconds(): number {
    if (!this.startTime) {
        return 0;
    }
    return Math.floor(((this.endTime ?? Date.now()) - this.startTime) / 1000);
  }

  /** format into H, M, S based on thresholds */
  formatTime(): string {
    const total = this.elapsedSeconds();
    const hrs = Math.floor(total / 3600);
    const mins = Math.floor((total % 3600) / 60);
    const secs = total % 60;

    if (hrs > 0) {
      return `${hrs}h ${mins}m ${secs}s`;
    } else if (mins > 0) {
      return `${mins}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  }

  /** use formatted string in your summary */
  summary(): string {
    return `Time spent: ${this.formatTime()}`;
  }
}
