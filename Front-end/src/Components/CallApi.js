import React from "react";

const axios = require('axios');
const callApi = async (props) => {
    const {gu, days} = props;
    
    try {
        axios({
            url: "localhost:8080",   
            method: 'get',
            data: {
                Q0: '서울특별시', // 시,도
                Q1: gu, // 군, 구
                QT: days, // 진료 요일
            }
        })
    } catch (e) {
        console.log(e);
    }
};

export default callApi;