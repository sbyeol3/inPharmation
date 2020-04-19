import React, { useState } from 'react';
import './Header.css';

const Header =() => {
  const [category,setCategory] = useState(0)
  return (
    <div className="Header">
      <div className="Button">
        <button onClick={()=> setCategory(0)}>메인 화면</button><br/>
        <button onClick={()=> setCategory(1)}>코로나 확진자</button><br/>
        <button onClick={()=> setCategory(2)}>재난문자 조회</button>
      </div>
      <p style={{lineHeight:'200px',margin:'0'}}>Emergency Disater Message</p>
    </div>
  );
};

export default Header;