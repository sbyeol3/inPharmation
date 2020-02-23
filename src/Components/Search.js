import React, { Component } from 'react';
import './Main.css';
import './Search.css';
import callApi from './callApi';

const Checkbox = props => (
  <input type="checkbox" {...props} />
)

const Option = props => (
  <input type="option" {...props} />
)

class Search extends Component {
  state = {
    mon : false, tue : false, wed : false, thr : false, fri : false, sat : false, sun : false,
    gu : ""
  }

  selectGuChange = e => {
    this.setState({
      gu: e.target.value
    })
  }
  handleInputChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;                            
    const name = target.name;
 
    this.setState({
      [name]: value
    });
  }

  showTarget = gu => {
    
  }

  handleClick = e => {
    e.preventDefault();
    const gu = this.state;
  }

  render(){
    return(
      <div className="Search">
        <p>영업요일</p>
        <label className="DaysCheckBox">
          <span>월</span><Checkbox name="mon" onChange={this.handleInputChange}/>
          <span>화</span><Checkbox name="tue" onChange={this.handleInputChange}/>
          <span>수</span><Checkbox name="wed" onChange={this.handleInputChange}/>
          <span>목</span><Checkbox name="thr" onChange={this.handleInputChange}/>
          <span>금</span><Checkbox name="fri" onChange={this.handleInputChange}/>
          <span>토</span><Checkbox name="sat" onChange={this.handleInputChange}/>
          <span>일</span><Checkbox name="sun" onChange={this.handleInputChange}/>
        </label>
        <p>약국주소</p>
        <label className="AddrSelected">
          서울특별시
          <select className="selectLang" value={this.state.gu} onChange={this.selectGuChange.bind(this)}>
		        <option value="강남">강남구</option><option value="강동">강동구</option>
            <option value="강서">강서구</option><option value="강북">강북구</option>
            <option value="관악">관악구</option><option value="광진">광진구</option>
            <option value="구로">구로구</option><option value="금천">금천구</option>
            <option value="노원">노원구</option><option value="동대문">동대문구</option>
            <option value="도봉">도봉구</option><option value="동작">동작구</option>
            <option value="마포">마포구</option><option value="서대문">서대문구</option>
            <option value="성동">성동구</option><option value="성북">성북구</option>
            <option value="서초">서초구</option> <option value="송파">송파구</option>
            <option value="영등포">영등포구</option><option value="용산">용산구</option>
            <option value="양천">양천구</option><option value="은평">은평구</option>
            <option value="종로">종로구</option><option value="중구">중구</option>
            <option value="중랑">중랑구</option>
          </select>
			    {this.showTarget(this.state.gu)}
        </label>
        <button onClick={this.handleClick}>Search</button>
      </div>
    );
  }
}

export default Search