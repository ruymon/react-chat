import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ChatPage } from "./pages/ChatPage";
import { HomePage } from "./pages/HomePage";


function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:token" element={<ChatPage />} />
        </Routes>
      </RecoilRoot>
   </BrowserRouter>
  );
}

export default App;
