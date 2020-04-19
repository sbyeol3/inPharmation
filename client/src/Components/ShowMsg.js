import React, { useState, useEffect } from 'react';
import './Main.css';
import './Search.css';

import callApi from './CallApi';

const ShowMsg = (props) => {
  const [days, setDays] = useState([]);
  const [gu, setGu] = useState('강남구');

  const fetchMsg = async e => {
    try{
      const {data, totalCount, numOfRows, pageNo} = await callApi(days,gu);
      props.onSubmit({data,totalCount,numOfRows,pageNo});
    } catch (error) {
      console.log(error);
  }
  }
  useEffect(()=>{
    fetchMsg()
  },[])

  return(
    <div className="Search">
    </div>
  );
}

export default ShowMsg