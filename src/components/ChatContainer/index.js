import { OutgoingMessageBubble } from "../OutgoingMessageBubble";

export function ChatContainer() {
  return (
    <div className="mt-2 py-4 h-3/6 flex flex-col">
      
      <OutgoingMessageBubble />
    </div>
  );
};