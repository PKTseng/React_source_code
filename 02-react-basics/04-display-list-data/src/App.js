import './App.css'

function App() {
  const microBlogs = [
    {
      id: 1,
      author: {
        name: '張小豐',
        avatar: 'https://picsum.photos/300/200',
      },
      content: '今天真是個適合郊遊的好天氣！大家有興趣一起去野餐嗎？我們可以在下午3點集合，如何？',
      publishDate: '2022-10-25',
    },
    {
      id: 2,
      author: {
        name: '王小玲',
        avatar: 'https://picsum.photos/300/200',
      },
      content: '剛看了一部很棒的電影，真的很推薦大家去看！有人這週末有空一起去電影院嗎？',
      publishDate: '2022-10-25',
    },
    {
      id: 3,
      author: {
        name: '李小明',
        avatar: 'https://picsum.photos/300/200',
      },
      content: '最近學習了一道新菜，味道相當不錯！有人想來我家品嚐嗎？週六晚上我來下廚，歡迎報名！',
      publishDate: '2022-10-25',
    },
  ]

  const handleInput = (e) => {
    console.log(e.target.value)
  }

  // const handleClick = (item) => {
  //   console.log(item)
  // }

  function handleClick(item) {
    return () => {
      console.log(item)
    }
  }

  return (
    <main className="container">
      {/* <h1 className="header">Hello World 🍂</h1> */}
      <h1 style={{ fontSize: '26px', color: 'red' }}>Hello World 🍂</h1>

      <textarea onInput={handleInput} className="textarea" placeholder="Write something" rows="5"></textarea>
      <button className="button">Submit</button>

      <div>
        {microBlogs.length > 0 ? (
          microBlogs.map((item) => (
            <div key={item.id} className="microblogItem" onClick={handleClick(item)}>
              <img src={item.author.avatar} alt={item.author.name} className="avatar" />

              <div className="microblogContent">
                <p className="authorName">{item.author.name}</p>
                <p className="content">{item.content}</p>
                <p className="date">{item.publishDate}</p>
              </div>
            </div>
          ))
        ) : (
          <p>暫無列表</p>
        )}
      </div>
    </main>
  )
}

export default App
