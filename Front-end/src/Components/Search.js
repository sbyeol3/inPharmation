import React, { Component, useState } from 'react';
import './Main.css';
import './Search.css';
import OptionGu from './OptionGu';
import CheckDays from './CheckDays';
import callApi from './CallApi';

const Search = () => {
  const [days, setDays] = useState([]);
  const [gu, setGu] = useState('강남구');

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

  const handleClick = e => {
    callApi(days,gu);
  }

  return(
    <div className="Search">
      <p>영업요일</p>
      <label className="DaysCheckBox" onChange={handleInputChange}>
        <CheckDays/>
      </label>
      <p>약국주소</p>
      <label className="AddrSelected">
        서울특별시
        <select className="selectLang" value={gu} onChange={selectGuChange}>
          <OptionGu/>
        </select>
      </label>
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default Search