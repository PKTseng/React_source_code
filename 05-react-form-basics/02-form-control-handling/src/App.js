import { Fragment, useState } from 'react'
import './App.css'

function App() {
  const initUser = {
    username: '',
    password: '',
    repeatPassword: '',
    gender: '',
    occupation: '',
    hobbies: [],
  }

  const [user, setUser] = useState(initUser)

  const gender = [
    { label: 'Boy', value: 'male' },
    { label: 'Girl', value: 'female' },
  ]

  const hobbies = [
    { label: '寫程式', value: 'programming' },
    { label: '畫畫', value: 'drawing' },
    { label: '聽音樂', value: 'music' },
  ]

  const [formError, setFormError] = useState({})

  const rules = {
    username: (value) => {
      if (value.length < 3 || value.length > 12) {
        return '用戶名必須是3到12個字符'
      }
    },
    password: (value) => {
      if (value.length < 8) {
        return '密碼至少需要8個字符'
      }

      if (!/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/[0-9]/.test(value)) {
        return '密碼必須包含大小寫字母和數字'
      }
    },
  }

  const handleSubmit = (e) => {
    let { type, value, name } = e.target

    if (type === 'checkbox') {
      const { checked } = e.target

      if (checked) {
        value = [...user.hobbies, value]
      } else {
        value = user.hobbies.filter((i) => i !== value)
      }
    }

    setUser({ ...user, [name]: value })

    const error = rules[name] && rules[name](value)

    setFormError({ ...formError, [name]: error })
  }

  const handleFromSubmit = (e) => {
    e.preventDefault()

    for (let rule of Object.keys(rules)) {
      console.log('rule=> ', rule)
      console.log('rules[rule]=> ', rules[rule])
      console.log('rules[rule](user[rule])=> ', rules[rule](user[rule]))

      const error = rules[rule](user[rule]) // 錯誤提示

      if (error) {
        setFormError({ ...formError, [rule]: error })
        return
      }
    }
  }

  const handleFormReset = () => {
    setUser(initUser)
  }

  return (
    <main className="container">
      <h1>使用者註冊</h1>
      <div className="form-container">
        <form onSubmit={handleFromSubmit} onReset={handleFormReset}>
          <div className="form-group">
            <label htmlFor="username">帳號</label>
            <input type="text" id="username" name="username" value={user.username} onChange={handleSubmit} />
            {formError.username && <span className="formError">{formError.username}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">密碼</label>
            <input type="password" id="password" name="password" value={user.password} onChange={handleSubmit} />
            {formError.password && <span className="formError">{formError.password}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="repeatPassword">確認密碼</label>
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              value={user.repeatPassword}
              onChange={handleSubmit}
            />
          </div>
          <div className="form-group">
            <label>性別</label>
            <div className="radio-group">
              {gender.map((item) => (
                <Fragment key={item.value}>
                  <label>{item.label}</label>
                  <input
                    type="radio"
                    name="gender"
                    value={item.value}
                    checked={user.gender === item.value}
                    onChange={handleSubmit}
                  />
                </Fragment>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="occupation">職業</label>
            <select id="occupation" name="occupation" value={user.occupation} onChange={handleSubmit}>
              <option value="">請選擇</option>
              <option value="frontend">前端工程師</option>
              <option value="backend">後端工程師</option>
              <option value="fullstack">全端工程師</option>
            </select>
          </div>
          <div className="form-group">
            <label>興趣</label>
            <div className="checkbox-group">
              {hobbies.map((h) => (
                <Fragment key={h.value}>
                  <label>
                    <input
                      type="checkbox"
                      name="hobbies"
                      value={h.value}
                      onChange={handleSubmit}
                      checked={user.hobbies.includes(h.value)}
                    />
                    {h.label}
                  </label>
                </Fragment>
              ))}
            </div>
          </div>
          <button type="submit">註冊</button>
          <button type="reset">重製</button>
        </form>

        <div className="user-info">
          <h2>已輸入的資料</h2>
          <ul>
            <li>帳號：{user.username}</li>
            <li>密碼：{user.password}</li>
            <li>確認密碼：{user.repeatPassword}</li>
            <li>性別：{user.gender}</li>
            <li>職業：{user.occupation}</li>
            <li>興趣：{user.hobbies.join('、')}</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default App
