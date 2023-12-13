export interface Message {
  id: number;
  isMy: boolean;
  isUnread: boolean;
  text: string;
  sendDate: string;
  sectionId: number;
}