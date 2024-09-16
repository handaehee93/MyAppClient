import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Member = () => {
  const [loginId, setLoginId] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 회원가입 처리 로직 (서버로 데이터 전송)
    try {
      const response = await fetch('http://localhost:8081/members/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          loginId: loginId,
          name: name,
          password: password,
        }),
      });

      if (!response.ok) {
        // 서버 응답이 200이 아닐 때, 오류 메시지 처리
        const errorMessage = await response.text();
        console.error("Error:", errorMessage);
        return;
      }

      const result = await response.json();  // JSON 파싱
      console.log("회원 가입 응답 메시지 = ", result);

      if (result === true) {  // 회원가입 성공 시 로그인 페이지로 이동
        navigate('/');
      }
    } catch (error) {
      console.error('회원가입 요청 중 에러 발생:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">회원가입</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="아이디"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <button type="submit" className="p-3 bg-blue-600 text-white rounded-lg font-bold">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Member;
