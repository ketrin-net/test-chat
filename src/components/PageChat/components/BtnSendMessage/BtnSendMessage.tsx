import React, { useState } from 'react';
import './BtnSendMessage.scss';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../../../store/chatSlice';

const BtnSendMessage = () => {
  const dispatch = useDispatch();
  const [textareaValue, setTextareaValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(addMessage({ textMessage: textareaValue }))
    setTextareaValue('');
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  return (
    <form className='btn-send-message' onSubmit={handleSubmit}>
      <textarea name="name" value={textareaValue} onChange={handleTextareaChange} />
      <input type="submit" value="Отправить" />
    </form>
  );
};

export default BtnSendMessage;