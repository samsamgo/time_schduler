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

export const ModalBackdrop = styled.div`
  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  background-color: rgba(200,0,0,.5);
  position: absolute;
  height: 565px;
  width: 330px;
  overflow: hidden;
  border-radius: 8px;
    left: 100px;
    bottom : 480px; 
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Menubutton = styled.button`
position: absolute;
top :-70px;
left : 370px;
height: 40px;
width: 40px;
  cursor: grab;

`;
const MenuLink = styled(Link)`
position: relative;
top :20px;
left : 20px;
  cursor: grab;
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
                    <MenuLink to="/calender.js" className="fa-solid fa-calendar-days"></MenuLink>
                    <Menubutton onClick={openModalHandler} className="fa-solid fa-bars">
                    </Menubutton>

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
                {isOpen ?
                    <ModalBackdrop
                        onClick={openModalHandler}
                    >
                        <Link to="/HaveToDo" className="fa-regular fa-table-list"></Link>
                        <Link to="/calender.js"><i className="fa-regular fa-table-list"></i></Link>
                        <Link to="/calender.js"><i className="far fa-question-circle"></i></Link>
                    </ModalBackdrop>
                    : null}

            </div>
        </>
    );
}
