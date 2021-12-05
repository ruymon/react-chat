import { formatSendHour } from "../../utility/time";

export function IncomingMessageBubble(props) {
  const rawDate = new Date(Date.parse(props.sendTimestamp));
  const {hour} = formatSendHour(rawDate);

  return ( 
    <div className="flex my-2 gap-x-3">
      {/* TODO: Keep Senders Image on Chat - Use Avatar Component */}
      <div className="bg-blue-100 w-3/5 p-2 rounded-md text-gray-800 flex flex-col">
        <span className="mb-1 font-bold text-gray-800">{props.sentBy}</span>
        <span className="w-full break-words">
          {props.message}
        </span>

        <div className="flex items-center mt-1 self-end">
          <span className="text-sm font-light mr-1 text-gray-700">{hour}</span>
        </div>
      </div>
    </div>
  );
};