import { KeyboardEvent, useContext, useRef} from 'react';
import styles from './chat.module.scss';
import { BiSend } from 'react-icons/bi'
import { ChatContext } from '../contexts/chatContextProvider';
import { UserContext } from '../contexts/userContextProvider';

export function TextBox(){
    const {currMessage, setCurrMessage} = useContext(ChatContext);
    const {socket, setSocket} = useContext(UserContext);
    const inputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(){
        if(!currMessage.trim()) return;

        socket.emit('message', currMessage);

        setCurrMessage('');
    }

    function handleEnter(value: KeyboardEvent<HTMLInputElement>){
        if(value.key == "Enter") handleSubmit();
    }

    return(
        <div className={styles.send}>
            <div>
                <input type="text" value={currMessage} onChange={(event) => setCurrMessage(event.target.value)} placeholder='Message'
                onKeyDown={(value) => handleEnter(value)}
                ref={inputRef}
                />
                <button onClick={handleSubmit}><BiSend size={30} color={'white'}/></button>
            </div>
        </div>
    )
}