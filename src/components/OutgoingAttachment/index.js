import { FiDownload } from 'react-icons/fi';
import { AiFillFileExcel, AiFillFileImage, AiFillFilePdf, AiFillFileMarkdown, AiFillFileWord, AiFillFileText, AiFillFilePpt, AiFillFileZip, AiFillFileUnknown, AiFillFile } from 'react-icons/ai';

import { chatRoomInfoState } from '../../atoms';
import { useRecoilValue } from 'recoil';

export function OutgoingAttachment(props) {
  const chatRoomInfo = useRecoilValue(chatRoomInfoState);
  const baseDonwloadUrl = chatRoomInfo[3];

  console.log(baseDonwloadUrl);

  const iconsDictionary = {
    // Tables Sheets
    'xlsx': 'AiFillFileExcel',
    'xls': 'AiFillFileExcel',
    'xlm': 'AiFillFileExcel',
    'xlsm': 'AiFillFileExcel',
    // Images
    'png': 'AiFillFileImage',
    'jpg': 'AiFillFileImage',
    'jpeg': 'AiFillFileImage',
    'gif': 'AiFillFileImage',
    'bmp': 'AiFillFileImage',
    'tiff': 'AiFillFileImage',
    'tif': 'AiFillFileImage',
    // Documents
    'pdf': 'AiFillFilePdf',
    'md': 'AiFillFileMarkdown',
    'doc': 'AiFillFileWord',
    'docx': 'AiFillFileWord',
    'txt': 'AiFillFileText',
    // Powerpoint
    'ppt': 'AiFillFilePpt',
    'pptx': 'AiFillFilePpt',
    // Zip
    'zip': 'AiFillFileZip',
    '7zip': 'AiFillFileZip',
    'rar': 'AiFillFileZip',
    'tar': 'AiFillFileZip',
    'gz': 'AiFillFileZip',
    'bz2': 'AiFillFileZip',
  };


  return (
    <div className="bg-blue-900 w-full p-1 my-2 mt-4 rounded-md self-end text-white flex items-center justify-between border-2 border-white">
      <div className="px-2">
        <AiFillFile className="text-2xl" />
      </div>

      <div className="flex flex-col items-start justify-center">
        <h1 className="font-bold text-lg">Anexo</h1>
        <span className="font-mono text-sm text-gray-100">{props.fileName}</span>
      </div>

      <a href={`${baseDonwloadUrl}${props.fileUrl}`} className="flex border-2 border-green-500 text-green-500 p-2 hover:text-white rounded bg-transparent hover:bg-green-500 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
        <FiDownload className=""/>
      </a>
    </div>
  );
};