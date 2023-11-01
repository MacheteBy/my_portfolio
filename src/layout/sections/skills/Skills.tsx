import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import groupImg from '../../../assets/images/GroupImg.svg';
import { theme } from '../../../styles/Theme';

export const Skills = () => {
    return (
        <StyledSectionSkills>
            <Container>
                <SectionTitle afterWidth={"240px"}><span>skills</span></SectionTitle>
                <FlexWrapper align-items={"start"} align={"flex-start"} gap={"16px"}>
                    <Photo src={groupImg} alt="photo" />
                    <FlexWrapper direction={"column"} gap={"16px"} padding={"43px 0px"}>
                        <Skill skillTitle={"Languages"} skillText={"TypeScript Lua Pyton JavaScript"} />
                    </FlexWrapper>
                    <FlexWrapper direction={"column"} gap={"16px"} padding={"43px 0px"}>
                        <Skill skillTitle={"Databases"} skillText={"SQLite PostgreSQL Mongo"} />
                        <Skill skillTitle={"Other"} skillText={"HTML CSS EJS SCSS REST Jinja"} />
                    </FlexWrapper>
                    <FlexWrapper direction={"column"} gap={"16px"} padding={"43px 0px"}>
                        <Skill skillTitle={"Tools"} skillText={"VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"} />
                        <Skill skillTitle={"Frameworks"} skillText={"React Vue Disnake Discord.js Flask Express.js"} />
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledSectionSkills>
    );
};



const StyledSectionSkills = styled.section`
    padding-bottom: 114px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Photo = styled.img`
    max-width: 40%;
    padding: 12px 60px 12px 32px;
    @media ${theme.media.smallDesctop} {
        display: none;
    }
`

