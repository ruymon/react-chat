import { FiDownload } from 'react-icons/fi';
import { AttachmentIcon } from '../AttachmentIcon';

import { chatRoomInfoState } from '../../atoms';
import { useRecoilValue } from 'recoil';

export function OutgoingAttachment(props) {
  const chatRoomInfo = useRecoilValue(chatRoomInfoState);
  const baseDonwloadUrl = chatRoomInfo[3];

  console.log(baseDonwloadUrl);

  return (
    <div className="bg-blue-900 w-full p-1 my-2 mt-4 rounded-md self-end text-white flex items-center justify-between border-2 border-white">
      <AttachmentIcon fileType={props.fileType}/>
      <div className="flex flex-col items-start justify-center">
        <h1 className="font-bold text-lg">Anexo</h1>
        <span className="font-mono text-sm text-gray-100">{props.fileType}</span>
      </div>

      <a href={`${baseDonwloadUrl}${props.fileUrl}`} className="flex border-2 border-green-500 text-green-500 p-2 hover:text-white rounded bg-transparent hover:bg-green-500 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
        <FiDownload className=""/>
      </a>
    </div>
  );
};