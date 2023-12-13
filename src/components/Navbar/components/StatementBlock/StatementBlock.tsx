import React, { useEffect, useState } from 'react';
import './StatementBlock.scss';
import { Sections } from '../../../../models/Section';
import { SectionsMok } from '../../../../mok/SectionsMok';
import SectionBlock from '../SectionBlock/SectionBlock';
import { Statement } from '../../../../models/Statement';

interface StatementBlockProps {
  key: number,
  statement: Statement,
}

const StatementBlock = (props: StatementBlockProps) => {
  const [openId, setOpenId] = useState<null | number>(null);
  const [sections, setSections] = useState<Sections[]>([]);

  useEffect(() => {
    const filteredSections = SectionsMok.filter((item) => item.statementId === openId);
    setSections(filteredSections);
  }, [openId]);

  const handlerClick = (statementId: number) => {
    if (props.statement.id === openId){
      setOpenId(null);
    }
    else{
      setOpenId(statementId);
    };
  }

  return (
    <li className={`accordion-block ${props.statement.id===openId ? `open` : ``}`}>
      <button className='btn-accordion' onClick={() => handlerClick(props.statement.id)} disabled={props.statement.unreadCount < 1}>
        <span>Номер заявки: {props.statement.number}</span>
        {props.statement.unreadCount > 0 ? (<div className='circle-unread'>{props.statement.unreadCount}</div>) : ''}
      </button>
      <div className={`accordion-collapse ${props.statement.id===openId ? `open` : ``}`}>
          {sections.map((item, key) => {
            return <SectionBlock sections={item} key={key} />
          })}
        </div>
    </li>
  );
};

export default StatementBlock;