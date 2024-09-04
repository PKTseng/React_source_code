import { Fragment, useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState({
    username: '',
    password: '',
    repeatPassword: '',
    gender: '',
    occupation: '',
    hobbies: [],
  })

  const gender = [
    { label: 'Boy', value: 'male' },
    { label: 'Girl', value: 'female' },
  ]

  const hobbies = [
    { label: '寫程式', value: 'programming' },
    { label: '畫畫', value: 'drawing' },
    { label: '聽音樂', value: 'music' },
  ]

  const handleSubmit = (e) => {
    let { type, value, name } = e.target
    // console.log('type', type)
    // console.log('value', value)
    // console.log('name', name)

    if (type === 'checkbox') {
      const { checked } = e.target

      if (checked) {
        value = [...user.hobbies, value]
      } else {
        value = user.hobbies.filter((i) => i !== value)
      }
    }

    setUser({ ...user, [name]: value })
  }

  const handleFromSubmit = (e) => {
    e.preventDefault()

    console.log(user)
  }

  return (
    <main className="container">
      <h1>使用者註冊</h1>
      <div className="form-container">
        <form action="" onSubmit={handleFromSubmit}>
          <div className="form-group">
            <label htmlFor="username">帳號</label>
            <input type="text" id="username" name="username" value={user.username} onChange={handleSubmit} />
          </div>
          <div className="form-group">
            <label htmlFor="password">密碼</label>
            <input type="password" id="password" name="password" value={user.password} onChange={handleSubmit} />
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
              {/* <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={user.gender === 'male'}
                  onChange={handleSubmit}
                />
                男性
              </label> */}
              {/* <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={user.gender === 'female'}
                  onChange={handleSubmit}
                />
                女性
              </label> */}
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
              {/* <label>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="programming"
                  onChange={handleSubmit}
                  checked={user.hobbies.includes('programming')}
                />
                寫程式
              </label>
              <label>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="drawing"
                  onChange={handleSubmit}
                  checked={user.hobbies.includes('drawing')}
                />
                畫畫
              </label>
              <label>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="music"
                  onChange={handleSubmit}
                  checked={user.hobbies.includes('music')}
                />
                聽音樂
              </label> */}
            </div>
          </div>
          <button type="submit">註冊</button>
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
