export interface Message {
  id: number;
  senderId: number;
  senderKnownAs: string;
  senderProfileUrl: string;
  recipientId: number;
  recipientKnownAs: string;
  recipientProfileUrl: string;
  content: string;
  isRead: boolean;
  dateRead: Date;
  messageSent: Date;
}
