import style from "./board_section_list_modules.css";

export const Board_section_list = () => {
    
    return (<div className = "board_section_list_main">
        <h1 className = "board_title">제목</h1>
        <div className= "board_previewNwriter">
            <p className = "board_preview">미리보기</p>
            <p className = "board_writer">작성자</p>
        </div>
    </div>)

}