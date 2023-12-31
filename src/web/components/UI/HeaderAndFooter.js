import { Link } from "react-router-dom";
import { DATA_SOCIAL } from "../../assets/data_social";
import { Navbar, Image, Container } from "react-bootstrap";

import Tooltip from '@mui/material/Tooltip';
import bailadorLogoAPP from "../../assets/imgs/bailador_project_logo.png";

export const HeaderApp = () => {

    return <>

        <Navbar className='HEADER_TOP_container' fixed="top" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="#" onClick={() => document.documentElement.scrollTop = document.body.scrollTop = 0}>
                        <Image width={100} src={bailadorLogoAPP} alt="bailador-project-logo" />
                    </Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    </>;
}

export const FooterApp = () => {

    return <div className="FOOTER_app_container">

        <div className="FOOTER_app_links_container">
            {
                DATA_SOCIAL.map((e, i) => <Tooltip key={i} title={`Connect to my profile ${e.title}`} placement="top-start">
                    <a href={e.url} target="_blank" rel="noreferrer">
                        <div>
                            <Image src={e.icon} />
                        </div>
                    </a>
                </Tooltip>)
            }
        </div>
        <div className='FOOTER_app_content_copy_right'>
            <p>
                &copy; Developed by Gastón E. Bailador - Bailador Project. All rights reserved.
            </p>
        </div>
    </div >;
}