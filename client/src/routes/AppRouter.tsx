import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import DashboardPage from "../pages/DashboardPage";
import ChatPanel from "../components/ChatPanel";
import TranscriptPanel from "../components/TranscriptPanel";
import LoadingState from "../components/LoadingState";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />}>
        <Route index element={<Navigate to="chat" replace />} />
        <Route path="chat" element={<ChatPanel />} />
        <Route path="transcript" element={<TranscriptPanel />} />
        <Route path="video" element={<LoadingState />} />
        <Route path="audio" element={<LoadingState />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
