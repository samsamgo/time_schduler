import React, { useState } from 'react';

export default function Login({ setUserInfo, setIsLogin }) {
    const [loginInfo, setLoginInfo] = useState({
        userId: 'samsamgo',
        password: '1234',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const handleInputValue = (key) => (e) => {
        setLoginInfo({ ...loginInfo, [key]: e.target.value });
    };

    const loginRequestHandler = () => {
        const { userId, password } = loginInfo;
        if (!userId || !password) {
            setErrorMessage('아이디와 비밀번호를 입력하세요');
            return;
        } else {
            setErrorMessage('');
        }

    };

    return (
        <div className='container'>
            <div className='menu'>

            </div>
            <div className='up-box'>
                <h1>Today Too</h1>
                <h3>welcome</h3>
            </div>
            <div className='right-box'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='input-field'>

                        <input className='pass_id' type='text' data-testid='id-input' onChange={handleInputValue('userId')} />

                        <input
                            className='pass_id'
                            type='password'
                            data-testid='password-input'
                            onChange={handleInputValue('password')}
                        />

                    </div>
                    <button type='submit' onClick={loginRequestHandler}>
                        LOGIN
                        {setIsLogin(true)}
                    </button>

                </form>
            </div>
        </div>
    );
}