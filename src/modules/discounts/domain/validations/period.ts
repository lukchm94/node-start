export enum PeriodType {
  CURRENT = 'current',
  PREVIOUS = 'previous',
}

export type Period = PeriodType.CURRENT | PeriodType.PREVIOUS;
