import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export interface TranscriptItem {
  text: string;
  start?: number;
  duration?: number;
}

export interface ChatMessage {
  id?: string;
  role: "user" | "AI";
  content: string;
}


export interface AppState {
  videoUrl: string;
  transcript: TranscriptItem[];
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
}

const initialState: AppState = {
  videoUrl: "",
  transcript: [],
  messages: [],
  isLoading: false,
  error: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setvideoUrl: (state, action: PayloadAction<string>) => {
      state.videoUrl = action.payload;
    },


    setTranscript: (state, action: PayloadAction<TranscriptItem[]>) => {
      state.transcript = action.payload;
    },


    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },


    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    resetApp: () => initialState,
  },
});

export const {
  setvideoUrl,
  setTranscript,
  addMessage,
  setLoading,
  setError,
  resetApp,
} = appSlice.actions;

export default appSlice.reducer;