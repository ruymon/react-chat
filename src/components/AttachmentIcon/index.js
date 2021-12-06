import { AiFillFileExcel, AiFillFileImage, AiFillFilePdf, AiFillFileMarkdown, AiFillFileWord, AiFillFileText, AiFillFilePpt, AiFillFileZip, AiFillFileUnknown, AiFillFile } from 'react-icons/ai';

const iconsDictionary = {
  // Tables Sheets
  'default': AiFillFileUnknown,
  'xlsx': AiFillFileExcel,
  'xls': AiFillFileExcel,
  'xlm': AiFillFileExcel,
  'xlsm': AiFillFileExcel,
  // Images
  'png': AiFillFileImage,
  'jpg': AiFillFileImage,
  'jpeg': AiFillFileImage,
  'gif': AiFillFileImage,
  'bmp': AiFillFileImage,
  'tiff': AiFillFileImage,
  'tif': AiFillFileImage,
  // Documents
  'pdf': AiFillFilePdf,
  'md': AiFillFileMarkdown,
  'doc': AiFillFileWord,
  'docx': AiFillFileWord,
  'txt': AiFillFileText,
  // Powerpoint
  'ppt': AiFillFilePpt,
  'pptx': AiFillFilePpt,
  // Zip
  'zip': AiFillFileZip,
  '7zip': AiFillFileZip,
  'rar': AiFillFileZip,
  'tar': AiFillFileZip,
  'gz': AiFillFileZip,
  'bz2': AiFillFileZip,
};

export function AttachmentIcon({fileType}) {
  const Icon = iconsDictionary[fileType] || iconsDictionary['default'];

  return(
    <div className="px-2">
      <Icon className="text-2xl" />
    </div>
  );
};