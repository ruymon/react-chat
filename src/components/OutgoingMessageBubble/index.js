//import { VscTriangleRight } from 'react-icons/vsc';
import { BsCheck2All } from 'react-icons/bs';

export function OutgoingMessageBubble(props) {
  return (
    <div className="bg-blue-900 w-3/5 p-2 rounded-md self-end text-white flex flex-col">
      <span className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Except adipiscing 
      </span>

      <div className="flex items-center mt-1 self-end">
        <span className="text-sm font-light mr-1 text-gray-100">11:35 AM</span>
        {/* COLOR States: Green -> text-green-400 Gray: text-gray-300 */}
        <BsCheck2All className="text-green-400 text-xl"/>
      </div>

    </div>
    //TODO: Add a triangle icon to the right of the bubble
  );
};
