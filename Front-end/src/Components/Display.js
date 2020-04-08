import React, {useState, useEffect} from 'react';
import './Main.css';
import './Display.css';
import {Card} from 'react-bootstrap';

const CardField = (props) => {
    const {create_date, location_id, location_name, md101_sn, msg, send_platform} = props.data;
    return(
        <Card style={{ width: '20rem', fontSize:'11px'}}>
            <Card.Header>{create_date}</Card.Header>
            <Card.Body>
                <Card.Title>재난문자</Card.Title>
                <Card.Text>{msg}</Card.Text>
            </Card.Body>
        </Card>
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
