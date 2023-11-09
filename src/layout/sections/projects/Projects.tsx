import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Project } from './project/Project';
import ProjOne from '../../../assets/images/proj_1.webp';
import ProjTwo from '../../../assets/images/proj_2.webp';
import ProjThre from '../../../assets/images/proj_3.webp';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import background_projects from '../../../assets/images/background_projects.svg'



export const Projects = () => {
    return (
        <StyledProjects id={'projects'}>
            <Container>
                <SectionTitle afterWidth={"510px"}><span>projects</span></SectionTitle>
                <FlexWrapper justify={'space-between'}>
                    <Project image={ProjOne} description='HTML SCSS Python Flask' name='ChertNodes' info='Minecraft servers hosting ' />
                    <Project image={ProjTwo} description='React Express Discord.js Node.js HTML SCSS Python Flask' name='ProtectX' info='Discord anti-crash bot' />
                    <Project image={ProjThre} description='CSS Express Node.js' name='Kahoot Answers Viewer' info='Get answers to your kahoot quiz' />
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
background-image: url(${background_projects});
background-repeat: no-repeat;
background-position: 100% 50%;
position: relative;
padding-bottom: 48px;
overflow-x: hidden;
@media ${theme.media.smallDesctop} {
        background-image: none;
    }
`

