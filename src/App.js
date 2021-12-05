import { RecoilRoot } from 'recoil';
import { Routes, Route } from "react-router-dom";

import { ChatPage } from "./pages/ChatPage";
import { HomePage } from "./pages/HomePage";


function App() {
  return (
  <RecoilRoot>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:token" element={<ChatPage />} />
    </Routes>
  </RecoilRoot>
  );
}

export default App;
