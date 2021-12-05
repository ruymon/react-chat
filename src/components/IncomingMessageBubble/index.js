import { formatSendHour } from "../../utility/time";
import { Avatar } from "../Avatar";

export function IncomingMessageBubble({messageData, userData}) {
  const rawDate = new Date(Date.parse(messageData.sent));
  const {hour} = formatSendHour(rawDate);

  const {avatar, firstName, lastName} = userData;
  return ( 
    <div className="flex my-2 gap-x-3">
      {/* TODO: Keep Senders Image on Chat - Use Avatar Component */}
      <Avatar avatarUrl={avatar} />
      <div className="bg-blue-100 w-3/5 p-2 rounded-md text-gray-800 flex flex-col">
        <span className="mb-1 font-bold text-gray-800">{`${firstName} ${lastName}`}</span>
        <span className="w-full break-words">
          {messageData.message}
        </span>

        <div className="flex items-center mt-1 self-end">
          <span className="text-sm font-light mr-1 text-gray-700">{hour}</span>
        </div>
      </div>
    </div>
  );
};