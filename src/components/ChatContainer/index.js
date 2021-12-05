import { useRecoilValue } from "recoil";
import { chatRoomInfoState, messagesState, participantsState } from "../../atoms";
import { IncomingMessageBubble } from "../IncomingMessageBubble";
import { OutgoingMessageBubble } from "../OutgoingMessageBubble";

export function ChatContainer() {
  const chatRoomInfo = useRecoilValue(chatRoomInfoState);
  const participants = useRecoilValue(participantsState);
  const messages = useRecoilValue(messagesState);

  const sender = chatRoomInfo[2];
  return (
    <div className="mt-2 py-4 flex flex-col overflow-y-auto h-96">
      {messages.map((messageItem) => {
        const {message, id, pilotid, sent} = messageItem;
        // TODO: Add Read confirmation
        if (`${sender}` === `${pilotid}`) {
          return <OutgoingMessageBubble key={id} message={message} sendTimestamp={sent} isRead/>;
        } else {
          if (!participants[pilotid]) return null;
          return <IncomingMessageBubble key={id} messageData={messageItem} userData={participants[pilotid]} />;
        }
      })}
    </div>
  );
};