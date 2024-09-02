import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [gender, setGender] = useState('')
  const [occupation, setOccupation] = useState('')
  const [hobbies, setHobbies] = useState([])

  function handleUsernameChange(e) {
    setUsername(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleRepeatPasswordChange(e) {
    setRepeatPassword(e.target.value)
  }

  function handleGenderChange(e) {
    setGender(e.target.value)
  }

  function handleOccupationChange(e) {
    setOccupation(e.target.value)
  }

  function handleHobbiesChange(e) {
    const { value, checked } = e.target

    if (checked) {
      setHobbies([...hobbies, value])
    } else {
      setHobbies(hobbies.filter((i) => i !== value))
    }
  }

  return (
    <main className="container">
      <h1>使用者註冊</h1>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="username">帳號</label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">密碼</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="form-group">
            <label htmlFor="repeatPassword">確認密碼</label>
            <input type="password" id="repeatPassword" value={repeatPassword} onChange={handleRepeatPasswordChange} />
          </div>
          <div className="form-group">
            <label>性別</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={handleGenderChange}
                />
                男性
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={handleGenderChange}
                />
                女性
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="occupation">職業</label>
            <select id="occupation" value={occupation} onChange={handleOccupationChange}>
              <option value="">請選擇</option>
              <option value="frontend">前端工程師</option>
              <option value="backend">後端工程師</option>
              <option value="fullstack">全端工程師</option>
            </select>
          </div>
          <div className="form-group">
            <label>興趣</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="hobby"
                  value="programming"
                  onChange={handleHobbiesChange}
                  checked={hobbies.includes('programming')}
                />
                寫程式
              </label>
              <label>
                <input
                  type="checkbox"
                  name="hobby"
                  value="drawing"
                  onChange={handleHobbiesChange}
                  checked={hobbies.includes('drawing')}
                />
                畫畫
              </label>
              <label>
                <input
                  type="checkbox"
                  name="hobby"
                  value="music"
                  onChange={handleHobbiesChange}
                  checked={hobbies.includes('music')}
                />
                聽音樂
              </label>
            </div>
          </div>
          <button type="submit">註冊</button>
        </form>

        <div className="user-info">
          <h2>已輸入的資料</h2>
          <ul>
            <li>帳號：{username}</li>
            <li>密碼：{password}</li>
            <li>確認密碼：{repeatPassword}</li>
            <li>性別：{gender}</li>
            <li>職業：{occupation}</li>
            <li>興趣：{hobbies.join('、')}</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default App
