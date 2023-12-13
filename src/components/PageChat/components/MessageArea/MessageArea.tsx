import React from 'react';
import './MessageArea.scss';
import { Message } from '../../../../models/Message';

interface MessageAreaProps {
  message: Message;
};

const MessageArea = (props: MessageAreaProps) => {
  return (
    <div className={`general-message ${props.message.isMy ? 'my' : 'user'}`}>
      <span>
        {props.message.text}
      </span>
      <p>{props.message.sendDate.slice(0, 16).replace('T', ' / ')}</p>
    </div>
  );
};

export default MessageArea;