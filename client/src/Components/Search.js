import React, { useState } from 'react';
import './Main.css';
import './Search.css';
import OptionGu from './OptionGu';
import CheckDays from './CheckDays';
import callApi from './CallApi';

const Search = (props) => {
  const [days, setDays] = useState([]);
  const [gu, setGu] = useState('강남구');
  const [msgData, setMsgData] = useState([]);
  const [totalCnt, setTotalCnt] = useState(0);

  const selectGuChange = (e) => {
    setGu(e.target.value);
  }

  const handleInputChange = (e) => {
    const {target} = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;                            
    const name = target.name;
    
    setDays([
      ...days,
      name,
    ]);
  }

  const handleClick = async e => {
    try{
      const {data, totalCount, numOfRows, pageNo} = await callApi(days,gu);
      // setMsgData(data);
      // setTotalCnt(totalCnt);
      props.onSubmit({data,totalCount,numOfRows,pageNo});
    } catch (error) {
      console.log(error);
  }
  }

  return(
    <div className="Search">
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default Search