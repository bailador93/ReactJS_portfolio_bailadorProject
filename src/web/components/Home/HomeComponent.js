import { InView } from 'react-intersection-observer';
import { useState } from 'react';
import { ControlBar, Player } from 'video-react';

import bg_video_home from "../../assets/imgs/bg_home.mp4"
import bg_cover_poster from "../../assets/imgs/bg_padd.jpg"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


export const HomeComponent = (props) => {

    const [useApplyBounceTop, setApplyBounceTop] = useState(false);

    const { setHomeSectionIsActive } = props;

    return <>

        <div id="section_home" className="HOME_MAIN_CONTAINER">

            <InView onChange={setHomeSectionIsActive}>

                <div className="HOME_MAIN_CONTENT">
                    <div className="title_content">
                        <h1> Hola, soy Desarrollador de Software </h1>
                        <h5> Bienvenido a mi portfolio </h5>

                        <div className={`${!useApplyBounceTop ? "bounce-top" : "fadeIn"}`}>
                            <KeyboardDoubleArrowDownIcon style={{ pointerEvents: "visible" }}
                                onClick={() => document.getElementById("section_projects").scrollIntoView({})}
                                onMouseEnter={() => setApplyBounceTop(true)}
                                onMouseLeave={() => setApplyBounceTop(false)} />
                        </div>
                    </div>
                </div>
                <div className="home_section_video_display">
                    <Player id="HOME_MAIN_CONTENT_player_bg_video"
                        muted={true}
                        autoPlay={true}
                        loop={true}
                        playsInline
                        poster={bg_cover_poster}
                        src={bg_video_home}
                    >
                        <ControlBar autoHide={false} className="home_section_video_control_bar" />
                    </Player>
                </div>

            </InView>
        </div>
    </>;
}