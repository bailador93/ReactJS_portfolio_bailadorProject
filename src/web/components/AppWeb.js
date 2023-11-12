import { Helmet } from "react-helmet";
import { HomeComponent } from "./Home/HomeComponent";
import { ProjectsComponent } from "./Projects/ProjectsComponent";
import { FooterApp, HeaderApp } from "./UI/HeaderAndFooter";


export const AppWeb = () => {

    return <>
        <Helmet>
            <title>
                Welcome to my portfolio
            </title>
        </Helmet>

        <HeaderApp />

        <HomeComponent />

        <ProjectsComponent />


        <FooterApp />
    </>;
}