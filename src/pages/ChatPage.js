
import { useSetRecoilState } from 'recoil';
import { chatRoomInfoState, messagesState, participantsState } from '../atoms';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';

import { ChatHeader } from "../components/ChatHeader";
import { ChatContainer } from "../components/ChatContainer";
import { InputMessageBox } from "../components/InputMessageBox";

export function ChatPage() {
  const params = useParams();
  const navigate = useNavigate();

  const setMessages = useSetRecoilState(messagesState);
  const setParticipants = useSetRecoilState(participantsState);
  const setChatRoomInfo = useSetRecoilState(chatRoomInfoState);

  useEffect(() => {
    async function getChatData() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/getMessages?token=${params.token}`);
        const roomInfo = [response.data.flight.code, response.data.flight.number, response.data.pilotId];

        setMessages(response.data.messages);
        setParticipants(response.data.participants);
        setChatRoomInfo(roomInfo);
      } catch (error) {
        navigate('/');
      };
    };

    const interval = setInterval(() => {
      getChatData();
    }, 5 * 1000);

    getChatData();

    return () => clearInterval(interval);
  }, [params.token, setMessages, setParticipants, navigate, setChatRoomInfo]);

  return (
    <div className="md:w-2/5 2xl:w-3/12 border-gray-200 border-2 px-2 py-4 rounded-lg">
      <ChatHeader />
      <ChatContainer />
      <InputMessageBox />
    </div>
  );
}