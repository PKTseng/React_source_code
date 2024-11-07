import { useState } from 'react'
import BlogPostDetails from './components/BlogPostDetails'
import './App.css'

function App() {
  const [網誌文章, set網誌文章] = useState({
    標題: 'React Hooks',
    內容: 'React Hooks 是 React 16.8 版本新增的功能',
    讚數: 10,
    作者: {
      姓名: '小明',
      簡介: '小明是一位前端工程師',
    },
    標籤: ['前端', 'React', '教學'],
  })

  function 處理按讚(讚數) {
    set網誌文章({
      ...網誌文章,
      讚數,
    })
  }

  return (
    <main className="container">
      <BlogPostDetails
        // 1. 字串型別
        title={網誌文章.標題}
        content={網誌文章.內容}
        // 2. 數字型別
        likes={網誌文章.讚數}
        // 3. 函式型別
        onLike={處理按讚}
        // 4. 物件型別
        author={網誌文章.作者}
        // 5. 陣列型別
        tags={網誌文章.標籤}
        // 6. 或者可以使用展開運算子
        // {...網誌文章}
        // onLike={處理按讚}
      />
    </main>
  )
}

export default App
