import React, { useState } from 'react';
import ShowMsg from './ShowMsg';
import Display from './Display';

const Main = () => {
  const [msgData, setMsgData] = useState([]);

  const dataSubmit = (data) => {
    setMsgData(data.data)
  }
  
  return(
    <>
      <ShowMsg onSubmit={dataSubmit}/>
      {console.log(msgData)}
      <Display data={msgData}/>
    </>
  );
}

export default Main