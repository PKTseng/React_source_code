import './style.css'

function BlogPostDetails({ title, content, likes, onLike, author, tags }) {
  function 處理按讚() {
    if (onLike) {
      onLike(likes + 1)
    }
  }

  return (
    <div className="blogPostDetails">
      <h2>
        {title} - <span className="type">{typeof title}</span>
      </h2>
      <p>
        {content} - <span className="type">{typeof content}</span>
      </p>
      <div className="likes">
        <button onClick={處理按讚}>按讚</button>
        <span>
          {likes} - <span className="type">{typeof likes}</span>
        </span>
      </div>
      <div>
        <p>
          作者：{author.姓名}，作者簡介：{author.簡介} - <span className="type">{typeof author}</span>
        </p>
      </div>
      <div>
        {tags.map((標籤, 索引) => (
          <span key={索引}>{標籤} </span>
        ))}
        <span>
          {' '}
          - <span className="type">{Object.getPrototypeOf(tags).constructor.name}</span>
        </span>
      </div>
    </div>
  )
}

export default BlogPostDetails
