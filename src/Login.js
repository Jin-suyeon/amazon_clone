import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const signIn = e => {
    //!새로고침 방지, 과부하가 걸릴 수도 있으므로
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
    .then(auth => {
      history.push('/')
    })
    .catch(error => alert(error.message()))
  }

  const register = e => {
    //!새로고침 방지, 과부하가 걸릴 수도 있으므로
    e.preventDefault()

    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      if(auth){
        history.push('/')
      }
    })
    .catch((err) => alert(err.message()))
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login_logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2880px-Amazon_logo.svg.png'
          alt='' />
      </Link>

      <div className='login_container'>

        <h1>로그인</h1>
        <form>
          <h5>이메일</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
          <h5>비밀번호</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={signIn} className='login_signInButton'>로그인 하기</button>
        </form>

        <p>이용 약관 동의 하십니까?</p>
        <button onClick={register} className='login_registerButton'>회원가입</button>
      </div>
    </div>
  );
}

export default Login