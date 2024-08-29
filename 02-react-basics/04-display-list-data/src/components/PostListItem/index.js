import React from 'react' // 在 react 17 之後這行就可以不要了，要留或是要刪除都可以
import './style.css'
// const handleClick = (item) => {
//   console.log(item)
// }

function handleClick(item) {
  return () => {
    console.log(item)
  }
}

// function PostListItem(props) {
//   console.log(typeof props.msg)

//   return (
//     <div className="microblogItem" onClick={handleClick(props.item)}>
//       <img src={props.item.author.avatar} alt={props.item.author.name} className="avatar" />

//       <div className="microblogContent">
//         <p className="authorName">{props.item.author.name}</p>
//         <p className="content">{props.item.content}</p>
//         <p className="date">{props.item.publishDate}</p>
//       </div>
//     </div>
//   )
// }

// 解構寫法
// function PostListItem({ item }) {
//   const defaultItem = {
//     author: { name: 'Unknown', avatar: '' },
//     content: '',
//     publishDate: '',
//   }

//   const currentItem = item || defaultItem

//   return (
//     <div className="microblogItem" onClick={handleClick(currentItem)}>
//       <img src={currentItem.author.avatar} alt={currentItem.author.name} className="avatar" />

//       <div className="microblogContent">
//         <p className="authorName">{currentItem.author.name}</p>
//         <p className="content">{currentItem.content}</p>
//         <p className="date">{currentItem.publishDate}</p>
//       </div>
//     </div>
//   )
// }

function PostListItem({ item, children }) {
  return (
    <div className="microblogItem" onClick={() => handleClick(item)}>
      <img src={item?.author?.avatar} alt={item?.author?.name} className="avatar" />

      <div className="microblogContent">
        <p className="authorName">{item?.author?.name}</p>
        <p className="content">{item?.content}</p>
        <p className="date">{item?.publishDate}</p>
      </div>

      <div>{children}</div>
    </div>
  )
}

export default PostListItem
