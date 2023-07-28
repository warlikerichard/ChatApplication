import { UserContext } from '../contexts/userContextProvider';
import { TextBox } from './TextBox';
import styles from './chat.module.scss';
import { useContext } from 'react';



interface Message{
    content: string;
    user: string;
}

interface ChatProps{
    messages: Message[];
}

export function Chat({messages}: ChatProps){
    const {socket, setSocket} = useContext(UserContext);

    return(
        <div className={styles.container}>
            <div className={styles.chatContainer}>
                {messages.map((message, key) => {
                    return (
                        message.user == socket.username ? <div className={styles.user} key={key}>{message.user + ': ' + message.content}</div> : <div key={key} className={styles.friend}>{message.user + ': ' + message.content}</div>
                    )
                })}
                
            </div>
            <TextBox />
        </div>
    )
    
}