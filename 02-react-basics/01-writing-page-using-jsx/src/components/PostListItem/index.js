import React from 'react' // react 17 之後可以不用加這行，要刪除保留都可以
import './style.css'

function handleItem(item) {
  return (e) => {
    console.log(e.target)
    console.log(item)
  }
}

function PostListItem(props) {
  // const { item, msg = 'msg' } = props // 給 msg 預設值

  // 如果父組件沒有傳遞 props  寫法
  const { item = { author: {} }, msg = 'msg', children } = props

  return (
    <div className="post" onClick={handleItem}>
      <div>{msg}</div>
      <img src={item.author.avatar} alt="" />
      <div className="postContainer">
        <p className="postContent">{item.content}</p>
        <div className="postMeta">
          <p className="postAuthor">{item.author.name}</p>
          <p className="postDate">{item.publishDate}</p>
        </div>
      </div>

      <div>{children}</div>
    </div>
  )
}

export default PostListItem
