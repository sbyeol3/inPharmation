import React, { Fragment } from 'react';

const Checkbox = props => (
    <input key={props.name} type="checkbox" {...props} />
)

const CheckDays = () => {
    const daysKo = ['월','화','수','목','금','토','일']
    
    return (
        <>
        { daysKo.map((v,i)=>{
            return(
                <Fragment key={i}>
                    <span key={v}>{v}</span>
                    <Checkbox key={i+100} name={i+1}/>
                </Fragment>
                );
            })
        }
        </>
    );
}

export default CheckDays;