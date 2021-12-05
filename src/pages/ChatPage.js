
import { useSetRecoilState } from 'recoil';
import { messagesState, participantsState } from '../atoms';
import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import axios from 'axios';

import { ChatHeader } from "../components/ChatHeader";
import { ChatContainer } from "../components/ChatContainer";
import { InputMessageBox } from "../components/InputMessageBox";

export function ChatPage() {
  const params = useParams();

  const [chatData, setChatData] = useState({});
  const setMessages = useSetRecoilState(messagesState);
  const setParticipants = useSetRecoilState(participantsState);

  useEffect(() => {
    async function getChatData() {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/getMessages?token=${params.token}`);
      setChatData(response.data);
      setMessages(response.data.messages);
      setParticipants(response.data.participants);
    };

    const interval = setInterval(() => {
      getChatData();
    }, 5 * 1000);

    getChatData();

    return () => clearInterval(interval);
  }, [params.token, setMessages, setParticipants]);

  return (
    <div className="md:w-2/5 2xl:w-3/12 border-gray-200 border-2 px-2 py-4 rounded-lg">
      <ChatHeader />
      <ChatContainer />
      <InputMessageBox />
    </div>
  );
}