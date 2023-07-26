"use client";

import { useRef } from 'react';
import { useRouter } from 'next/navigation'
import style from './page.module.scss';
import * as io from 'socket.io-client';

export default function Home() {

  const router = useRouter();

  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);


  function handleSubmit(){
    const login = loginRef.current?.value;
    const password = passwordRef.current?.value;

    if(!login?.trim() || !password?.trim()) return

    const socket = io.connect('http://localhost:3001');
    
    router.push('/chat');
  }

  return (
    <div className={style.login}>
      <h1>Welcome! Please sign in</h1>
      <input type="text" name="login" placeholder='email' ref={loginRef}/>
      <input type="password" name="password" placeholder='password' ref={passwordRef}/>

      <button onClick={handleSubmit}>Entrar</button>
    </div>
  )
}
