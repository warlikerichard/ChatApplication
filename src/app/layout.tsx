import './globals.css'
import style from './layout.module.scss';
import type { Metadata } from 'next'

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
      <body className={style.bigContainer}>{children}</body>
    </html>
  )
}
