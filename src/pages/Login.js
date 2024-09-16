import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate 훅 가져오기

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(null); // 로그인 성공 여부 상태
  const navigate = useNavigate();  // useNavigate 훅 초기화

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const result = await response.json();
      console.log(result)

      setLoginSuccess(result); // 서버 응답에 따라 상태 업데이트

      if (result === true) {  // 로그인 성공 시 메인 페이지로 이동
        navigate('/main');  // '/main' 경로로 이동
      }
    } catch (error) {
      console.error('로그인 요청 중 에러 발생:', error);
      setLoginSuccess(false); // 오류가 발생한 경우 로그인 실패 처리
    }
  };

  // 회원가입 버튼을 눌렀을 때 회원가입 페이지로 이동
  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-start mr-10">
        <h1 className="text-6xl text-blue-600 font-bold mb-4">Hello</h1>
        <p className="text-2xl text-gray-600">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email or Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <button type="submit" className="p-3 bg-blue-600 text-white rounded-lg font-bold">
            로그인
          </button>
          <a href="/" className="text-blue-600 text-center mt-2">
            비밀번호 찾기
          </a>
          <div className="border-t border-gray-300 my-4"></div>
          <button type="button" onClick={goToSignUp} className="p-3 bg-green-500 text-white rounded-lg font-bold">
            회원 가입
          </button>
        </form>

        {loginSuccess !== null && (
          <p className="mt-4 text-center">
            {loginSuccess ? 'Login successful!' : 'Invalid email or password.'}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
