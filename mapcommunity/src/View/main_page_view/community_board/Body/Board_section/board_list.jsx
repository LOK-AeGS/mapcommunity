import { Board_section_list } from "./Board_section_list/board_section_list"
import style from "./board_list_modules.css"

export const Board_list = () => {
    return(
    <div className ="board_list_main">
        <ol>
            {<li><Board_section_list></Board_section_list></li>}
        </ol>
    </div>
    
    )
}