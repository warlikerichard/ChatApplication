import { Header } from '@/components/Header';
import './globals.css'
import style from './layout.module.scss';
import type { Metadata } from 'next'
import { UserContextProvider } from '@/components/contexts/userContextProvider';
import { ChatContextProvider } from '@/components/contexts/chatContextProvider';

export const metadata: Metadata = {
  title: 'Chat test',
  description: 'A website to test realtime chat amongst other experiences!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={style.bigContainer}>
      <UserContextProvider>
        <ChatContextProvider>
          <Header />
          <main className={style.main}>
            {children}
          </main>
        </ChatContextProvider>   
      </UserContextProvider>
        
        </body>
    </html>
  )
}
