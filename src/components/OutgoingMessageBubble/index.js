//import { VscTriangleRight } from 'react-icons/vsc';
import { BsCheck2All } from 'react-icons/bs';
import { formatSendHour } from '../../utility/time';
import { OutgoingAttachment } from '../OutgoingAttachment';

export function OutgoingMessageBubble(props) {
  const rawDate = new Date(Date.parse(props.sendTimestamp));
  const {hour} = formatSendHour(rawDate);

  return (
    <div className="bg-blue-900 w-3/5 p-2 mr-2 my-2 rounded-md self-end text-white flex flex-col">
      <span className="w-full break-words">
        {props.message}

        {props.attachment && <OutgoingAttachment fileName={props.attachmentType} fileUrl={props.attachment} />}
      </span>

      <div className="flex items-center mt-1 self-end">
        <span className="text-sm font-light mr-1 text-gray-100">{hour}</span>
        {/* COLOR States: Green -> text-green-400 Gray: text-gray-300 */}
        <BsCheck2All className={props.isRead ? 'text-green-400' : 'text-gray-300'}/>
      </div>

    </div>
    //TODO: Add a triangle icon to the right of the bubble
  );
};
