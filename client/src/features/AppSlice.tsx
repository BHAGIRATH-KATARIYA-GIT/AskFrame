import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ChatMessage, TranscriptEntry } from "../types/types";

import { getMessagesFromLocalStorage, getTranscriptFromLocalStorage, getVideoURLFromLocalStorage, storeVideoURLToLocalStorage, storeTranscriptToLocalStorage, storeMessageToLocalStorage, clearLocalStorage } from "../services/localstorage";

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
      storeTranscriptToLocalStorage(action.payload);
    },

    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
      storeMessageToLocalStorage(action.payload);
    },

    clearMessages: (state) => {
      state.messages = [];
      localStorage.removeItem("messages");
    },

    clearVideoURL: () => {
      localStorage.removeItem("video_url");
    },

    resetApp: () => {
        localStorage.clear()
    },
  },
});

export const {
  setvideoUrl,
  setTranscript,
  addMessage,
  clearMessages,
  clearVideoURL,
  resetApp,
} = appSlice.actions;

export default appSlice.reducer;
