import { Main_board_header } from "./Board_section_Header/main_board_header";
import { Board_list } from "./board_list";
import { Board_write_button } from "./board_write_button";
import style from "./main_board_modules.css";

export const Main_board = () => {
    return(
        <div className = "main_board_section">
            <div className="main_board_header">
                <Main_board_header/>
            </div>
            <div className="main_board_write_button">
                <Board_write_button/>
            </div>
            <div className="main_board_center">
            <div className = "main_board_list">
                <Board_list/>
            </div>
            </div>
        </div>
    )
}