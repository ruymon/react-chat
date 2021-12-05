import { HiOutlinePaperAirplane } from 'react-icons/hi';
import { BsPaperclip } from 'react-icons/bs';

export function InputMessageBox() {
  return (
    <div className="w-full bg-gray-100 flex justify-between rounded">
      <div className="w-full">
        <input type="text" className="w-full h-12 px-4 rounded bg-transparent outline-none text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" placeholder="Mensagem" />
      </div>

      <div className="flex items-center gap-2 px-4">
        <BsPaperclip className="text-xl text-gray-600 hover:text-blue-900 transition duration-200 transform hover:scale-110" />
        <HiOutlinePaperAirplane className="transform rotate-45 text-xl font-bold text-gray-600 hover:text-green-500 transition duration-200 hover:scale-110"/>
      </div>
    </div>
  );
};