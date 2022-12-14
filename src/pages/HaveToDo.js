import React from 'react';
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { useState, useRef } from 'react';

const Havetododiv = styled.div`
text-align: center;
color: #f57474;
font-weight: 900;
font-size: 2rem;
`;

const Inputsection = styled.section`
    position: relative;

    left: 5%;
`;

const InputForm = styled.input`
  margin-top: 40px;
  height: 50px;
  width: 300px;
`;

const InputButton = styled.button`
  margin-left: 20px;
  width: 60px;
  height: 50px;
  font-weight: bold;
  font-size: 20px;
`;
const Todolist = styled.div`
  border: 5px solid transparent;
  border-radius: 30px 10px;
  margin-top: 30px;
  margin-left: auto;
  width: 380px;
`;
const Checkinput = styled.input`
  position: absolute;
  left: 15px;
  margin-top: 18px;
  width: 20px;
  height: 20px;
`;


const TodoButton = styled.button`
  position: absolute;
  left: 380px;
  margin-top: 13px;
  width: 30px;
  height: 30px;
`;

const Todoitem = styled.div`
  margin: 7px;
  font-size: 30px;
  border: solid 1px gray;
  background-color: white;
  height: 60px;
  line-height: 60px;
`;

// const todolist = fetch('http://localhost:3001/todolist')
//     .then(response => console.log(response))
//     .then((response) => {
//         return response.json();

//     })

export default function Have_todo({ addDiscussion }) {
    const no = useRef(1);
    const [todo, setTodo] = useState();
    const textRef = useRef("");
    const [text, setText] = useState("");
    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) return;
        Add(text);
        setText("");
        textRef.current.focus();
    };

    const Add = (text) => {
        setTodo([...todo, { id: no.current++, text, check: false }]);
    };

    const Delete = (id) => {
        setTodo(todo.filter((todo) => todo.id !== id));
    };

    return (
        <>
            <div className="container">
                <div className='menu'>

                </div>
                <Havetododiv>
                    Have_todo
                </Havetododiv>

                <Todolist>
                    {todo.map((item) => (
                        <Todoitem>
                            <em>{item.text}</em>
                            <Checkinput type='checkbox' />
                            <TodoButton onClick={() => Delete(item.id)}>🗑</TodoButton>
                        </Todoitem>
                    ))}
                </Todolist>

                <Inputsection>
                    <form onSubmit={onSubmit}>

                        <InputForm
                            type="text"
                            value={text}
                            onChange={changeInput}
                            ref={textRef}
                        />
                        <InputButton type="submit">Add</InputButton>
                    </form>
                </Inputsection>
            </div>
        </>
    );
}