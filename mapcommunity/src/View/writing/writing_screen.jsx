import { Button, TextField, TextareaAutosize } from "@mui/material"
import { useState } from "react";
import style from "./writing_screen_modules.css";
import {useDispatch} from 'react-redux';
/* 나중에 분리해줘야한다 */
export const Writing_screen = () => {
    const dispatch = useDispatch();
    const [text,setText] = useState([])
    function onChange(e){
        setText(e.target.value);
    }
    return (<div className="writing_screen_main">
        <div>
            <TextField
            className="writing_screen_title"
            label = '제목'/>
        </div>
        <div className = "writing_screen_content">
            <textarea
            placeholder="내용"
            onChange = {onChange}/>
        </div>
        <div className = "writing_screen_button">
            <Button onClick={()=>
                dispatch({type:'POST', write: text})
                }>게시</Button>
        </div>

    </div>)

}