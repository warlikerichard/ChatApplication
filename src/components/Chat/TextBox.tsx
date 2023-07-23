"use client";

import { useState } from 'react';
import styles from './chat.module.scss';
import { BiSend } from 'react-icons/bi'

export function TextBox(){
    const [text, setText] = useState<string>();

    return(
        <div className={styles.send}>
            <div>
                <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder='Message'/>
                <button><BiSend size={30} color={'white'}/></button>
            </div>
        </div>
    )
}