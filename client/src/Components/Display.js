import React, {useState, useEffect} from 'react';
import './Main.css';
import './Display.css';
// import {Card, CardGroup} from 'react-bootstrap';

const CardField = (props) => {
    const {create_date, location_id, location_name, md101_sn, msg, send_platform} = props.data;
    return(
        <div className="Message">
            <p>
                <span>{msg}</span>
            </p>
            <p >{create_date}</p>
        </div>
    );
}
const Display = (props) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        if(props.data)
            setData(props.data)
    },[props])
    return(
            <div className="Display">
            { data && data.map((v,i) => <CardField data={v}/>)}
            </div>
    )
};
export default Display;
