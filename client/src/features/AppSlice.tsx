import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ChatMessage, TranscriptEntry } from "../types/types";
import {
  getTranscriptFromLocalStorage,
  getVideoURLFromLocalStorage,
} from "../components/UrlInputSection";
import { getMessagesFromLocalStorage } from "../components/ChatPanel";

export interface AppState {
  videoUrl: string;
  transcript: TranscriptEntry[];
  messages: ChatMessage[];
}

const initialState: AppState = {
  videoUrl: getVideoURLFromLocalStorage(),
  transcript: getTranscriptFromLocalStorage(),
  messages: getMessagesFromLocalStorage(),
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setvideoUrl: (state, action: PayloadAction<string>) => {
      state.videoUrl = action.payload;
    },

    setTranscript: (state, action: PayloadAction<TranscriptEntry[]>) => {
      state.transcript = action.payload;
    },

    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },

    clearMessages: (state) => {
      state.messages = [];
      localStorage.removeItem("messages");
    },

    resetApp: () => initialState,
  },
});

export const {
  setvideoUrl,
  setTranscript,
  addMessage,
  clearMessages,
  resetApp,
} = appSlice.actions;

export default appSlice.reducer;
