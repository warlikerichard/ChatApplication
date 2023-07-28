"use client";

import { useRef } from 'react';
import { useRouter } from 'next/navigation'
import style from './page.module.scss';
import { useContext } from 'react';
import { UserContext } from '@/components/contexts/userContextProvider';

export default function Home() {
  const {socket} = useContext(UserContext);
  const router = useRouter();

  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);


  async function handleSubmit(){
    const login = loginRef.current?.value;
    const password = passwordRef.current?.value;

    if(!login?.trim() || !password?.trim()) return

    socket.emit('set_username', login)
    socket.username = login;
    
    router.push('/chat');
  }

  return (
    <div className={style.login}>
      <h1>Welcome! Please sign in</h1>
      <input type="text" name="login" placeholder='username' ref={loginRef}/>
      <input type="password" name="password" placeholder='password' ref={passwordRef}/>

      <button onClick={handleSubmit}>Entrar</button>
    </div>
  )
}
