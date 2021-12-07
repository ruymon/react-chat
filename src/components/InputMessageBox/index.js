import axios from 'axios';

import { useState } from 'react';
import { useParams } from 'react-router';

import { HiOutlinePaperAirplane } from 'react-icons/hi';
import { BsPaperclip } from 'react-icons/bs';
import { RiLoader5Line } from 'react-icons/ri';	
import { useSetRecoilState } from 'recoil';
import { messagesState } from '../../atoms';

export function InputMessageBox() {
  const params = useParams();
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const token = params.token;

  const clearInput = () => {
    setMessage('');
    setAttachment(null);
  };

  const setMessages = useSetRecoilState(messagesState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === '' && !attachment) {
      alert('No message or attachment to send');
      return;
    };
    setIsSubmitting(true);
    const data = new FormData();
    data.append('token', token);
    data.append('message', message);
    data.append('attachment', attachment);
    
    axios.post(`${apiBaseUrl}/sendMessage`, data)
      .then(res => setMessages(res.data.messages))
      .then(() => setIsSubmitting(false));

    clearInput();
  };

  const isButtonDisabled = message.trim() === '' && !attachment;

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="w-full bg-gray-100 flex justify-between rounded" >
      <div className="w-full">
        <input type="text" className="w-full h-12 px-4 rounded bg-transparent outline-none text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" onChange={(event) => setMessage(event.target.value)} value={message} placeholder="Mensagem" />
      </div>

      <div className="flex items-center gap-2 px-4">
        <label htmlFor="file-input">
          <BsPaperclip className={`text-xl hover:text-blue-900 transition duration-200 transform hover:scale-110 ${attachment ? 'text-green-500' : ' text-gray-600'}`} />
        </label>

        <input id="file-input" type="file" onChange={(event) => setAttachment(event.target.files[0])} className="hidden"/>          

        <button type="submit" disabled={isButtonDisabled && isSubmitting} >
          { isSubmitting ?
            <RiLoader5Line className={`text-blue-900 font-bold text-xl animate-spin disabled:opacity-50 cursor-not-allowed`} />
            :
            <HiOutlinePaperAirplane className={`transform rotate-45 text-xl font-bold text-gray-600 ${isButtonDisabled ? 'disabled:opacity-50 cursor-not-allowed' : 'hover:text-green-500 transition duration-200 hover:scale-110'}`}/>
          }
        </button>
      </div>
    </form>
  );
};