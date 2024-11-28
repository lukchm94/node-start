export enum GroupType {
  IND = 'individual',
  GROUP = 'group',
}

export type Group = GroupType.GROUP | GroupType.IND;
