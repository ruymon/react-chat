import { FiX } from 'react-icons/fi';
import { Avatar } from '../Avatar';

import { useRecoilValue } from 'recoil';
import { participantsState, chatRoomInfoState } from '../../atoms';

export function ChatHeader() {
  const participants = useRecoilValue(participantsState);
  const chatRoomInfo = useRecoilValue(chatRoomInfoState);

  const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <div className="flex justify-between items-center px-2">
      {/* Chat Members */}
      <div className="flex -space-x-2 overflow-hidden">

        {Object.keys(participants).map((key) => {
          return <Avatar key={generateRandomId()} avatarUrl={participants[key].avatar}/>
        })}
      </div>

      <div className="flex flex-col justify-between items-center">
        <h1 className="font-bold text-lg text-blue-900">{chatRoomInfo}</h1>
        <span className="font-normal text-sm text-gray-500">Última mensagem à 45 minutos</span>
      </div>

      <FiX className="text-gray-700 hover:text-red-600 text-xl" />

      
    </div> 
  );
};