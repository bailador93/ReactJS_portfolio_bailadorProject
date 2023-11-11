import { InView } from "react-intersection-observer";
import { Octokit } from "octokit";
import { Navigation } from 'swiper';
import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Button, Image } from "react-bootstrap";

import axios from "axios";
import Tooltip from '@mui/material/Tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
import img_repo_git from "../../assets/imgs/img_repo_git.jpg";

import homer_simpson from "../../assets/imgs/homer_simpson.gif";


export const ProjectsComponent = () => {

    const [useResultGithub, setResultGithub] = useState({
        isLoading: true,
        data: [],
        errorMSG: ""
    });

    const matches = useMediaQuery('(min-width:992px)');

    const octokit_options = {
        auth: process.env.REACT_APP_TOKEN_GITHUB
    };

    const github_credential = new Octokit(octokit_options);


    useEffect(() => {
        const getCredential = async () => {

            try {
                const github_credential_result = await github_credential.rest.users.getAuthenticated();

                axios.get(`${github_credential_result?.data.url}/repos`)
                    .then(function (response) {
                        setResultGithub({
                            errorMSG: "",
                            isLoading: false,
                            data: response.data,
                        });
                    })
                    .catch(function (error) {
                        setResultGithub({
                            errorMSG: "ERROR. Usuario de GIT NO puede responder",
                            isLoading: false,
                            data: [],
                        });
                    });

            } catch (error) {
                setResultGithub({
                    errorMSG: "ERROR. Usuario de GIT NO autorizado",
                    isLoading: false,
                    data: [],
                });
            }
        }
        getCredential();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [useResultGithub.isLoading]);

    return <div id="section_projects" className="SECTIONS_CONTAINER">

        <div className="content_data">

            <h3>
                <span style={{ textShadow: "0px 0px 10px rgb(0 102 255)" }}>
                    Proyectos
                </span>
                <span className="fadeIn_infinite " style={{ color: "#F24F09", textShadow: "0px 0px 10px #F24F09" }}>
                    {"> "}
                </span >
            </h3>

            <InView >
                <div className='card_container'>

                    {
                        useResultGithub.isLoading ? <div style={{ textAlign: "center", marginTop: "5%", marginBottom: "5%" }}>
                            <span className="SPINNER_loading1"></span>
                        </div> : useResultGithub.errorMSG ? <div className="ERROR_MSG_CONTAINER">

                            {useResultGithub.errorMSG}

                        </div> : <Swiper
                            slidesPerView={matches ? 4 : 1}
                            centeredSlides={false}
                            spaceBetween={20}
                            pagination={{
                                type: "fraction",
                            }}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper">

                            {
                                useResultGithub.data.map((e, i) => e.homepage ? <SwiperSlide key={i}>
                                    <Card className="h-100 card_item_swiper_card">
                                        <div className="card_item_swiper_title">
                                            {e.name}
                                        </div>
                                        <Card.Body className="card_item_body_swiper_card">
                                            <div>
                                                <Image src={img_repo_git} />
                                            </div>

                                            <div className="card_item_body_swiper_card_btn_read">
                                                <Tooltip title="Ver demostración" placement="top-start">
                                                    <a href={e.homepage} target='_blank' rel="noreferrer">
                                                        <Button size="sm" onMouseDown={(e) => e.preventDefault()}>
                                                            <PreviewIcon />
                                                        </Button>
                                                    </a>
                                                </Tooltip>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide> : null)
                            }
                        </Swiper>
                    }

                    <div className="GITHUB_REPO_CONTAINER">

                        <p className='title_repo'><GitHubIcon /></p>

                        <div className='repository_list_content'>
                            {
                                useResultGithub.isLoading ? <div style={{ textAlign: "center", marginTop: "5%", marginBottom: "5%" }}>
                                    <span className="SPINNER_loading1"></span>
                                </div> : useResultGithub.errorMSG ? <div className="ERROR_MSG_CONTAINER">

                                    {useResultGithub.errorMSG}

                                </div> : <>

                                    {
                                        useResultGithub.data.map((e, i) => <a href={e.html_url} target='_blank' rel="noreferrer" key={i}>
                                            <div className='repo_item'>
                                                <p className='name_repo'>
                                                    {"#"}{e.full_name}
                                                </p>
                                                <p className='description_repo'>
                                                    {"/*"}{e.description}{"*/"}
                                                </p>

                                                {
                                                    e.topics.length > 0 ? <div className="repository_list_content_btn_topics">
                                                        {
                                                            e.topics.map((e) =>
                                                                <button type="button" class=" btn-sm">
                                                                    {e}
                                                                </button>
                                                            )
                                                        }
                                                    </div> :
                                                        null
                                                }
                                            </div>
                                        </a>)
                                    }

                                </>

                            }
                        </div>
                    </div>
                </div>
            </InView>

            <div style={{ marginTop: "5%", marginBottom: "-5%", textAlign: "center" }}>
                <Image src={homer_simpson} />
                <div style={{ color: "#e5e5e5" }}>Gracias por visitar mi portfolio 🙂</div>
            </div>

        </div>
    </div>;
}