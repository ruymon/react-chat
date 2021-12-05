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
      {messages.map(({message, id, pilotid, sent, read}) => {
        if (`${sender}` === `${pilotid}`) {
          console.log(message.read);
          // TODO: Set isRead
          return <OutgoingMessageBubble key={id} message={message} sendTimestamp={sent} isRead/>;
        } else {
          if (!participants[pilotid]) return null;
          const {avatar, firstName, lastName} = participants[pilotid];
          return <IncomingMessageBubble key={id} message={message} sendTimestamp={sent} avatarUrl={avatar} sentBy={`${firstName} ${lastName}`}/>;
        }
      })}
    </div>
  );
};