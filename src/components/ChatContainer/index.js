import { useRecoilValue } from "recoil";
import ScrollToBottom from 'react-scroll-to-bottom';

import { chatRoomInfoState, messagesState, participantsState } from "../../atoms";
import { IncomingMessageBubble } from "../IncomingMessageBubble";
import { OutgoingMessageBubble } from "../OutgoingMessageBubble";

export function ChatContainer() {
  const chatRoomInfo = useRecoilValue(chatRoomInfoState);
  const participants = useRecoilValue(participantsState);
  const messages = useRecoilValue(messagesState);

  const sender = chatRoomInfo[2];

  return (
    // TODO Change scroll down Icon button
    <ScrollToBottom className="py-2">
      <div className="w-full h-96 mt-2 py-4 flex flex-col">
        {messages.map((messageItem) => {
          const {message, id, pilotid, sent, read, attachment, attachment_type} = messageItem;
          if (`${sender}` === `${pilotid}`) {
            return <OutgoingMessageBubble key={id} message={message} sendTimestamp={sent} isRead={!!read} attachment={attachment} attachmentType={attachment_type}/>;
          } else {
            if (!participants[pilotid]) return null;
            return <IncomingMessageBubble key={id} messageData={messageItem} userData={participants[pilotid]} attachment={attachment} attachmentType={attachment_type}/>;
          }
        })}
      </div>
    </ScrollToBottom>
  );
};