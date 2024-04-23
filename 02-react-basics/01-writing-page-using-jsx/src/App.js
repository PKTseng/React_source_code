import './App.css'

import UserImage1 from './assets/images/user1.png'
import UserImage2 from './assets/images/user2.png'
import UserImage3 from './assets/images/user3.png'

import PostListItem from './components/PostListItem'

function App() {
  const title = 'title'
  const microBlogs = [
    {
      id: 1,
      author: {
        name: '张小丰',
        avatar: UserImage1,
      },
      content: '这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？',
      publishDate: '2022-10-25',
    },
    {
      id: 2,
      author: {
        name: '王小玲',
        avatar: UserImage2,
      },
      content: '这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？',
      publishDate: '2022-10-25',
    },
    {
      id: 3,
      author: {
        name: '李小明',
        avatar: UserImage3,
      },
      content: '这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？',
      publishDate: '2022-10-25',
    },
  ]

  const textStyle = {
    fontSize: '28',
    color: '#32325d',
    textAlign: 'center',
  }

  function inputText(e) {
    return console.log(e.target.value)
  }

  function EditBtn({ onEdit }) {
    function handleEdit() {
      onEdit('handleEdit')
    }

    return (
      <>
        <button onClick={handleEdit}>Edit</button>
      </>
    )
  }

  return (
    <div className="container">
      <p style={textStyle}>{title}</p>

      <div className="publishBlog">
        <textarea name="some thing" id="" cols="30" rows="10" onInput={inputText}></textarea>
        <button>submit</button>
      </div>

      <div className="postList">
        {microBlogs.length > 0 ? (
          microBlogs.map((item) => (
            <PostListItem key={item.id} item={item}>
              <EditBtn onEdit={(action) => console.log(item.id, action)} />
            </PostListItem>
          ))
        ) : (
          <p> no data</p>
        )}
      </div>
    </div>
  )
}

export default App
