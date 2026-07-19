export interface Message {
  sender: 'assistant' | 'user';
  text: string;
  isTakeaway?: boolean;
}

export interface TranscriptEntry {
  time: string;
  text: string;
}
