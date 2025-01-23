class Filter {
  private group: string;
  private name: string;
  private state: number;

  constructor(name: string, group: string, initialState: number = 0) {
    this.group = group;
    this.name = name;
    this.state = initialState;
  }

  toggleStatus(): void {
    this.state = this.state === 1 ? 0 : 1;
  }

  getState(): number {
    return this.state;
  }

  getName(): string {
    return this.name;
  }

  getGroup(): string {
    return this.group;
  }

  setState(newState: number): void {
    this.state = newState;
  }
}

export default Filter;
