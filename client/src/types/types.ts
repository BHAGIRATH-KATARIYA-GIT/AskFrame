export interface ChatMessage {
  role: 'AI' | 'user';
  content: string;
  isTakeaway?: boolean;
}

export interface TranscriptEntry {
  time: string;
  text: string;
}

