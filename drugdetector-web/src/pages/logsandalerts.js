import Header from '../constants/header';
import "../styles/table.css";
import '../styles/color.css';
import React, { useEffect, useState } from "react";

// 추후 별도 관리 필요
const ENDPOINT = "http://127.0.0.1:11000/api/getlogs";

const LogsAndAlerts = (props) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(ENDPOINT, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((result) => {
        console.log(result);
        setData(result);
        })
        .catch((error) => {
        console.error('오류 발생: ' + error);
        });      
    }, []);


  return (
    <>
    <Header />
    <div class="main-content">
        <div class="wrap_main">
            <div class="contant_table">
                <table id="table_detectlog">
                    <thead class="table_head">
                        <tr>
                            <th>ID</th>
                            <th>이름</th>
                            <th>성별</th>
                            <th>나이</th>
                            <th>시간</th>
                            <th>장소</th>
                            <th>EEG</th>
                            <th>ECG</th>
                            <th>비고</th>
                        </tr>
                    </thead>
                    <tbody class="table_body">
                        {data.map(item => (
                            <tr>
                                <td>{item.userID}</td>
                                <td>{item.userName}</td>
                                <td>{item.gender}</td>
                                <td>{item.age}</td>
                                <td>{item.time}</td>
                                <td>{item.place}</td>
                                <td>{item.ResEEG}</td>
                                <td>{item.ResECG}</td>
                                <td>{item.note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  );
}

export default LogsAndAlerts;
