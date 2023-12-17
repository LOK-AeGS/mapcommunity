import style from "./main_board_header_moduels.css"
import { Board_header_button } from "./board_header_button"
import { Board_header_login_button } from "./board_header_login_button"
import { Board_header_search } from "./board_header_serach"


export const Main_board_header = () => {
    const button_list = ["Category","All Posts","My Posts"]
    return (<div className="board_main">
        <div>{
        button_list.map((a) => {
            return (<Board_header_button button_category={a}/>)
        }
        )
    }
        </div>
        <div className="board_header_searchNlogin">
            <div className="board_header_search">
                <Board_header_search/>
            </div>
            <div className="board_header_login_button">
                <Board_header_login_button/>
            </div>
        </div>
        </div>


    )
}