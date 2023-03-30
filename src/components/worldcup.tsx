import "./worldcup.css";

export const Worldcup = ():JSX.Element => {
    return (
        <>
            <div className="container">
                <div className="title_container">
                    <h1 className="title">원신 이상형 월드컵</h1>
                </div>
                <div className="contents_container">
                    <div className="contents_A">
                        <h1 className="character_name_A">앰버</h1>
                    </div>
                    <div className="contents_B">
                        <h1 className="character_name_B">리사</h1>
                    </div>
                </div>
            </div>
        </>
    )
}