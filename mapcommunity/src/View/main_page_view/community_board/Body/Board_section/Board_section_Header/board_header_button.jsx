import { Button } from "@mui/material"
import style from "./board_header_login_button_Modules.css"

export const Board_header_button = ({button_category}) => {
    return (
        <Button>{button_category}</Button>
    )
}