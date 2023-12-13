import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import StatementBlock from './components/StatementBlock/StatementBlock';
import { StatementsMok } from '../../mok/StatementsMok';
import { Statement } from '../../models/Statement';

const Navbar = () => {
  const [allStatements, setAllStatements] = useState<Statement[]>([]);

  useEffect(() =>{
    //запрос к API через fetch
    setAllStatements(StatementsMok);
  }, [])

  return (
    <div id='navbar'>
      {allStatements.map((item, key) => {
        return <StatementBlock key={key} statement={item}/>
      })}
    </div>
  );
};

export default Navbar;