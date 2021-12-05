import { FiX } from 'react-icons/fi';
import { Avatar } from '../Avatar';

export function ChatHeader() {
  return (
    <div className="flex justify-between items-center px-2">
      {/* Chat Members */}
      <div className="flex -space-x-2 overflow-hidden">
        <Avatar avatarUrl="https://flyazulv.com/imagecrop/croppedavatar.php?piloco=AZU2234&firstname=K&lastname=F"/>
        <Avatar avatarUrl="https://github.com/ruymon.png"/>
      </div>

      <div className="flex flex-col justify-between items-center">
        <h1 className="font-bold text-lg text-blue-900">Chat - <span>AZU3541</span></h1>
        <span className="font-normal text-sm text-gray-500">Última mensagem à 45 minutos</span>
      </div>

      <FiX className="text-gray-700 hover:text-red-600 text-xl" />
    </div> 
  );
};