import { formatSendHour } from "../../utility/time";
import { Avatar } from "../Avatar";
import { IncomingAttachment } from "../IncomingAttachment";

export function IncomingMessageBubble({messageData, userData, ...props}) {
  const rawDate = new Date(Date.parse(messageData.sent));
  const {zuluTime} = formatSendHour(rawDate);

  const {avatar, firstName, lastName} = userData;
  return ( 
    <div className="flex my-2 gap-x-3">
      <Avatar avatarUrl={avatar} />
      <div className="bg-blue-100 w-3/5 p-2 rounded-md text-gray-800 flex flex-col">
        <span className="mb-1 font-bold text-gray-800">{`${firstName} ${lastName}`}</span>
        <span className="w-full break-words">
          {messageData.message}

          {props.attachment && <IncomingAttachment fileType={props.attachmentType} fileUrl={props.attachment} />}
        </span>

        <div className="flex items-center mt-1 self-end">
          <span className="text-sm font-light mr-1 text-gray-700">{zuluTime}</span>
        </div>
      </div>
    </div>
  );
};