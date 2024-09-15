import React from 'react';

const Main = () => {
  const posts = [
    { id: 1, username: 'user1', image: 'https://via.placeholder.com/400', caption: 'This is my first post!' },
    { id: 2, username: 'user2', image: 'https://via.placeholder.com/400', caption: 'Enjoying the view!' },
    // 더 많은 게시물을 추가할 수 있습니다.
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center">
      {/* 좌측 사이드바 */}
      <div className="w-1/4 p-4 hidden md:block">
        <div className="fixed">
          <h1 className="text-2xl font-bold mb-8">Instagram</h1>
          <ul>
            <li className="mb-4"><a href="/" className="text-lg">Home</a></li>
            <li className="mb-4"><a href="/" className="text-lg">Explore</a></li>
            <li className="mb-4"><a href="/" className="text-lg">Notifications</a></li>
            <li className="mb-4"><a href="/" className="text-lg">Messages</a></li>
            <li className="mb-4"><a href="/" className="text-lg">Profile</a></li>
          </ul>
        </div>
      </div>

      {/* 메인 피드 */}
      <div className="w-full md:w-2/4 p-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg mb-8">
            {/* 게시물 상단: 사용자 정보 */}
            <div className="flex items-center p-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <p className="font-bold">{post.username}</p>
              </div>
            </div>
            {/* 게시물 이미지 */}
            <img src={post.image} alt="Post" className="w-full" />
            {/* 게시물 하단: 캡션 */}
            <div className="p-4">
              <p>
                <span className="font-bold">{post.username}</span> {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 우측 사이드바 */}
      <div className="w-1/4 p-4 hidden md:block">
        <div className="fixed">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
            <div>
              <p className="font-bold">current_user</p>
              <p className="text-gray-500">View Profile</p>
            </div>
          </div>
          <p className="text-gray-600">Suggested for you</p>
          {/* 추천 사용자 목록 */}
          <div className="mt-4">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full mr-4"></div>
              <p className="font-bold">user3</p>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full mr-4"></div>
              <p className="font-bold">user4</p>
            </div>
            {/* 더 많은 추천 사용자 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
