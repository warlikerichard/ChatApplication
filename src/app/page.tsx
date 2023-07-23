import { Header } from '@/components/Header'
import style from './page.module.scss';
import { Chat } from '@/components/Chat';

export default function Home() {
  const messages = [
    {content: 'Die, monster! You don\'t belong in this world!', isUser: true},
    {content: 'It was not by my hand that I\'m once again given flesh. I was called here by humans who wish to pay me tribute.', isUser: false},
    {content: '"Tribute"?! You steal men\'s souls, and make them your slaves!', isUser: true},
    {content: 'Perhaps the same could be said of all religions.', isUser: false},
    {content: 'Your words are as empty as your soul! Mankind ill needs a savior such as you!', isUser: true},
    {content: 'What is a man? [flings his wine glass aside] A miserable little pile of secrets! But enough talk! Have at you!', isUser: false}
  ]

  return (
    <main className={style.main}>
      <Header />
      <div className={style.chat}>
        <Chat messages={[...messages, ...messages, ...messages]} />
      </div>
    </main>
  )
}
