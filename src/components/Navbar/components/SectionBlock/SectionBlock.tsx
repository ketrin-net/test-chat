import React from 'react';
import './SectionBlock.scss';
import { Sections } from '../../../../models/Section';
import { useDispatch } from 'react-redux';
import { openChat } from '../../../../store/chatSlice';

interface SectionBlockProps {
  key: number
  sections: Sections;
}

const SectionBlock = (props: SectionBlockProps) => {
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(openChat({ sectionId: props.sections.id }));
  };

  return (
    <button className='btn-section' onClick={() => handlerClick()}>
      <span>{props.sections.name}</span>
      <div className='circle-unread'>{props.sections.unreadCount}</div>  
    </button>
  );
};

export default SectionBlock;