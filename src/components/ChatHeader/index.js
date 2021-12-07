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
        <h1 className="font-bold text-lg text-blue-900">{`${chatRoomInfo[0]}${chatRoomInfo[1]}`}</h1>
        <div className="flex flex-col">
          <span className="font-normal text-sm text-gray-500">Chat AzulV - <span className="font-mono">BETA 0.1</span></span>
          <span className="text-sm text-gray-400">Powered by <a target="_blank" rel="noreferrer" className="font-semibold text-blue-900 hover:text-blue-800 opacity-90" href="https://www.github.com/ruymon">@ruymon</a></span>
        </div>

      </div>

      <FiX className="text-gray-700 hover:text-red-600 text-xl" />

      
    </div> 
  );
};