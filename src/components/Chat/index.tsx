import { TextBox } from './TextBox';
import styles from './chat.module.scss';

interface Message{
    content: string;
    isUser: boolean;
}

interface ChatProps{
    messages: Message[];
}

export function Chat({messages}: ChatProps){
    return(
        <div className={styles.container}>
            <div className={styles.chatContainer}>
                {messages.map(message => {
                    return (
                        message.isUser ? <div className={styles.user} key={message.content}>{message.content}</div> : <div key={message.content} className={styles.friend}>{message.content}</div>
                    )
                })}
                
            </div>
            <TextBox />
        </div>
    )
    
}