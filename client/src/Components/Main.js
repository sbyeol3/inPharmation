import React, { useState } from 'react';
import Search from './Search';
import Display from './Display';

const Main = () => {
  const [msgData, setMsgData] = useState([]);

  const dataSubmit = (data) => {
    setMsgData(data.data)
  }
  
  return(
    <>
      <Search onSubmit={dataSubmit}/>
      {console.log(msgData)}
      <Display data={msgData}/>
    </>
  );
}

export default Main