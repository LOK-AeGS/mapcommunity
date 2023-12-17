import { Main_board } from "../View/main_page_view/community_board/Body/Board_section/main_board"
import { Title_where_is_this } from "../View/main_page_view/community_board/Body/title_where_is_this"
import style from "./community_page.css"
export const Community_page = () => {
    return (
        <div className="community_page">
            <div>
                <Title_where_is_this/>
            </div>
            <div className = "page_board_section">
                <Main_board/>
            </div>

        </div>
    )
}