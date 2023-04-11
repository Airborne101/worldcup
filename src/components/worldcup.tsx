import { CountInput } from "./countinput";
import "./worldcup.css";
import { useState, useEffect, ReactElement } from "react";

export const Worldcup = () => {

    const [count, setCount] = useState<number>(0);
    const [countModal, setCountModal] = useState<boolean>(true);

    return (
        <>
        {/* ▼ 몇강으로 할지 선택 */}
        { countModal === true ? <CountInput/> : null }
        {/* ▲ 몇강으로 할지 선택 */}
            <div className="container">
                <div className="title_container">
                    <h1 className="title">원신 이상형 월드컵</h1>
                </div>
                <div className="contents_container">
                    <div className="contents_A">
                        <h1 className="character_name_A">앰버</h1>
                        <div className="character_img_A" style={ { backgroundImage : "url('src/assets/hodu.png')" } }></div>
                    </div>
                    <div className="contents_B">
                        <h1 className="character_name_B">리사</h1>
                        <div className="character_img_B" style={ {  } }></div>
                    </div>
                </div>
            </div>
        </>
    )
}