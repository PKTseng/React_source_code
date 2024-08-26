import './App.css'

function App() {
  const microBlogs = [
    {
      id: 1,
      author: {
        name: '张小丰',
        avatar: 'https://placekitten.com/50/50',
      },
      content: '这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？',
      publishDate: '2022-10-25',
    },
    {
      id: 2,
      author: {
        name: '王小玲',
        avatar: 'https://placekitten.com/51/51',
      },
      content: '这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？',
      publishDate: '2022-10-25',
    },
    {
      id: 3,
      author: {
        name: '李小明',
        avatar: 'https://placekitten.com/52/52',
      },
      content: '这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？',
      publishDate: '2022-10-25',
    },
  ]

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      textAlign: 'center',
      color: '#333',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '5px',
      border: '1px solid #ddd',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#1da1f2',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    microblogItem: {
      borderBottom: '1px solid #eee',
      padding: '15px 0',
      display: 'flex',
    },
    avatar: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      marginRight: '15px',
    },
    microblogContent: {
      flex: 1,
    },
    authorName: {
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    content: {
      marginBottom: '5px',
    },
    date: {
      color: '#657786',
      fontSize: '0.9em',
    },
  }

  return (
    <main style={styles.container}>
      <h1 style={styles.header}>欢迎使用本应用 🍂</h1>

      <textarea style={styles.textarea} placeholder="写点什么吧..." rows="5"></textarea>
      <button style={styles.button}>发布</button>

      <div>
        {microBlogs.length > 0 ? (
          microBlogs.map((item) => (
            <div key={item.id} style={styles.microblogItem}>
              <img src={item.author.avatar} alt={item.author.name} style={styles.avatar} />

              <div style={styles.microblogContent}>
                <p style={styles.authorName}>{item.author.name}</p>
                <p style={styles.content}>{item.content}</p>
                <p style={styles.date}>{item.publishDate}</p>
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
