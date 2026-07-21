import type { ChatMessage, TranscriptEntry } from "../types/types";

function storeTranscriptToLocalStorage(transcript: TranscriptEntry[]) {
  const storedTranscript = JSON.stringify(transcript);
  localStorage.setItem("transcript", storedTranscript);
}

function storeVideoURLToLocalStorage(video_url: string) {
  localStorage.setItem("video_url", video_url);
}

function getTranscriptFromLocalStorage() {
  const storedData = localStorage.getItem("transcript");
  const parsedData = storedData ? JSON.parse(storedData) : [];

  return parsedData;
}

function getVideoURLFromLocalStorage() {
  const storedData = localStorage.getItem("video_url");
  return storedData ? storedData : "";
}

function clearLocalStorage() {
  localStorage.clear();
}

function storeMessageToLocalStorage(message: ChatMessage) {
  const parsemessages = getMessagesFromLocalStorage();

  const messages = [...parsemessages, message];
  localStorage.setItem("messages", JSON.stringify(messages));

  return messages;
}

function getMessagesFromLocalStorage() {
  const storedmessages = localStorage.getItem("messages");
  const parsemessages = storedmessages ? JSON.parse(storedmessages) : [];

  return parsemessages;
}

export {
  getTranscriptFromLocalStorage,
  getVideoURLFromLocalStorage,
  storeTranscriptToLocalStorage,
  storeVideoURLToLocalStorage,
  clearLocalStorage,
  getMessagesFromLocalStorage,
  storeMessageToLocalStorage,
};
