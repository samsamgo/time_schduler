import { PieChart } from 'react-minimal-pie-chart';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from 'react';
import React from 'react';


const Piediv = styled.div`
  width : 60%;
  position: relative;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const Achivediv = styled.div`
text-align: center;
color: #f57474;
font-weight: 900;
font-size: 2rem;
position: relative;
top: 20%;
`;

const Menubutton = styled.button`
    width: 30px;
    height: 30px;

  border: none;
  padding: 20px;
  color: white;
  border-radius: 50px;
  cursor: grab;

`;
const calendarbutton = styled.button`


`;


export default function My_Page({ value }) {

    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
        setIsOpen(!isOpen);

    };

    return (
        <>
            <div className="container">
                <div className='menu'>
                    <Link to="/calender.js"><i className="far fa-question-circle"></i></Link>
                    <Menubutton onClick={openModalHandler}>
                        <i class="fa-solid fa-bars"></i>
                        {isOpen ? "opened" : "Open Modal"}
                    </Menubutton>
                    <Link to="/HaveToDo"><i className="far fa-question-circle"></i></Link>
                    <Link to="/calender.js"><i className="far fa-question-circle"></i></Link>
                    <Link to="/calender.js"><i className="far fa-question-circle"></i></Link>

                </div>
                <Piediv>
                    <PieChart
                        data={[
                            {
                                value: value,
                                color: '#f6cb44',
                                name: "namel",
                            },
                        ]}
                        reveal={20}
                        lineWidth={18}
                        background='#f3f3f3'
                        lengthAngle={360}
                        rounded
                        animate
                        label={({ dataEntry }) => dataEntry.value + '%'}
                        labelStyle={{
                            fontSize: "26px",
                            fill: "#333333",
                        }}
                        labelPosition={0}

                    />
                </Piediv>
                <Achivediv>
                    {`현재 성취도 ${value}%`}
                </Achivediv>
            </div>
        </>
    );
}
