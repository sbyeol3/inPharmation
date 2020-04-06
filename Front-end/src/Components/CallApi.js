import React from "react";

const axios = require('axios');
const callApi = async (gu,days) => {
    console.log(gu,days)
    try {
        axios({
            url: "http://localhost:5000/search",   
            method: 'get',
            params: {
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