import { useState } from 'react'
import './App.css'
import UserImage1 from './assets/images/user1.png'
import UserImage2 from './assets/images/user2.png'
import UserImage3 from './assets/images/user3.png'
import PostListItem from './components/PostListItem'

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name: '陳小明',
        avatar: UserImage1,
      },
      content: '今天去了西門町逛街，真是太熱鬧了！有人想下週末一起去嗎？',
      publishDate: '2024-08-15',
    },
    {
      id: 2,
      author: {
        name: '林小芳',
        avatar: UserImage2,
      },
      content: '剛看完一部很棒的電影，真的很推薦大家去看！',
      publishDate: '2024-08-16',
    },
    {
      id: 3,
      author: {
        name: '王大為',
        avatar: UserImage3,
      },
      content: '有人知道台北哪裡有好吃的牛肉麵嗎？想嘗試新口味。',
      publishDate: '2024-08-17',
    },
  ])

  return (
    <main className="container">
      <h1>歡迎使用社群貼文應用 📱</h1>
      <div className="publish-post">
        <textarea placeholder="分享你的想法..." cols="30" rows="5"></textarea>
        <button>發布</button>
      </div>
      <div className="post-list">{posts.length > 0 ? posts.map((post) => <PostListItem blog={post} key={post.id} />) : <p>目前沒有貼文</p>}</div>
    </main>
  )
}

export default App
