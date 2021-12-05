import { IncomingMessageBubble } from "../IncomingMessageBubble";
import { OutgoingMessageBubble } from "../OutgoingMessageBubble";

export function ChatContainer() {
  return (
    <div className="mt-2 py-4 h-3/6 flex flex-col">
      
      <OutgoingMessageBubble message="Olá Sol" sendTimestamp="2021-12-03 21:41:30" isRead="true"/>
      <IncomingMessageBubble message="Olá Lua, como você está?" sendTimestamp="2021-12-04 21:41:30" sentBy="Sol"/>
      <OutgoingMessageBubble message="Estou muito bem e você?" sendTimestamp="2021-12-04 21:41:30" isRead="false"/>
    </div>
  );
};