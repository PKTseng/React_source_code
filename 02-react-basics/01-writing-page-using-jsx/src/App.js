import './App.css'

function App() {
  const title = 'title'
  const microBlogs = [
    {
      id: 1,
      author: {
        name: '张小丰',
        avatar: '',
      },
      content: '这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？',
      publishDate: '2022-10-25',
    },
    {
      id: 2,
      author: {
        name: '王小玲',
        avatar: '',
      },
      content: '这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？',
      publishDate: '2022-10-25',
    },
    {
      id: 3,
      author: {
        name: '李小明',
        avatar: '',
      },
      content: '这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？',
      publishDate: '2022-10-25',
    },
  ]

  // function inputText(e) {
  //   return console.log(e.target.value)
  // }

  const inputText = (e) => console.log(e.target.value)

  return (
    <>
      <h1 style={{ fontSize: '64px', color: 'orange' }}>{title}</h1>

      <div>
        <textarea name="some thing" id="" cols="30" rows="10" onInput={inputText}></textarea>
        <button>submit</button>
      </div>

      {microBlogs.length > 0 ? (
        microBlogs.map((item) => (
          <div key={item.id}>
            <img src={item.author.avatar} alt="" />
            <div> {item.author.name}</div>

            <p>{item.content}</p>
            <p>{item.publishDate}</p>
          </div>
        ))
      ) : (
        <p> no data</p>
      )}
    </>
  )
}

export default App
