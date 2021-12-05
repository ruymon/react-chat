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
      {messages.map(({message, id, pilotid, sent}) => {
        if (sender === pilotid) {

          // TODO: Set isRead
          // TODO: Set sentBy in IncomingMessageBubble
          return <OutgoingMessageBubble key={id} message={message} sendTimestamp={sent}/>;
        } else {
          return <IncomingMessageBubble key={id} message={message} sendTimestamp={sent} avatarUrl="https:\/\/flyazulv.com\/imagecrop\/croppedavatar.php?piloco=AZU2234&firstname=K&lastname=F" sentBy='Shirley Teresinha'/>;
        }
      })}
    </div>
  );
};