import React from 'react';
import './PageChat.scss';
import BtnSendMessage from './components/BtnSendMessage/BtnSendMessage';
import { useSelector } from 'react-redux';
import { selectMessages } from '../../store/chatSlice';
import MessageArea from './components/MessageArea/MessageArea';

const PageChat = () => {
  const allMessages = useSelector(selectMessages);
  
  return (
    <div id='page-chat'>
      <div className='window-msg'>
        {allMessages.map((item, key) => {
          return <MessageArea key={key} message={item} />
        })}
      </div>
      <BtnSendMessage />
    </div>
  );
};

export default PageChat;