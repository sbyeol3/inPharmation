import React, {useState, useEffect} from 'react';
import './Main.css';
import './Display.css';
// import {Card} from 'bootstrap';

const CardField = (props) => {
    const {create_data, location_id, location_name, md101_sn, msg, send_platform} = props;
    return(
        <div style={{ width: '18rem', height: '100px'}}>
            <div>
                <p>{location_name}</p>
                <p>{msg}</p>
            </div>
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
            <p>hi</p>
            { data && data.map((v,i) => <CardField data={v}/>)}
            </div>
    )
};
export default Display;
