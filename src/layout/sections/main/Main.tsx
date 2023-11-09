import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/Photo.png'
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';
import photo_before from '../../../assets/images/Phote_before.svg';
import photo_after from '../../../assets/images/Photo_after.svg';
import quotation_marks from '../../../assets/images/quotation_marks.svg';
import { Icon } from '../../../components/icon/Icon';
import background_main from '../../../assets/images/background_main.svg';
import { AttentionSeeker, Fade } from "react-awesome-reveal";

export const Main = () => {
    return (
        <StyleMain id={'main'}>

            <Container>
                <FlexWrapper align={"center"} direction={"column"}>
                    <FlexWrapper align={"center"} justify={"space-around"}>
                        <FlexInfoWrapper>
                            <MainTitleWrapper>
                                <MainTitle>
                                    Vladimir Marchenkov is a <span>front-end developer</span>
                                </MainTitle>
                                <AboutMe>
                                    He crafts responsive websites where technologies meet creativity
                                </AboutMe>
                                <BtnContatMe>
                                    Contact me!!
                                </BtnContatMe>
                            </MainTitleWrapper>
                            <PhotoWrapper>
                                <PhotoContent>
                                    <Photo src={photo} alt="photo" />
                                </PhotoContent>
                                <SubtextPhoto>
                                    Currently working on <span>Portfolio</span>
                                </SubtextPhoto>
                            </PhotoWrapper>
                        </FlexInfoWrapper>

                    </FlexWrapper>
                    <AttentionSeeker>
                        <Fade damping={0.1} delay={300} cascade={true}>
                        <CitationText>
                            <p>
                                With great power comes great electricity bill
                            </p>
                            <span>
                                - Dr. Who
                            </span>
                        </CitationText>
                    </Fade>
                    </AttentionSeeker>
                    

                </FlexWrapper>
            </Container>
        </StyleMain>
    );
};


const StyleMain = styled.section`
    background-image: url(${background_main});
    background-repeat: no-repeat;
    background-position: 100% 82%;
    display: flex;
    position: relative;
    padding-top: 62px;
    padding-bottom: 74px;
    /* overflow-x: hidden; */
    @media ${theme.media.mobile} {
        padding-bottom: 20px;
    }
    @media ${theme.media.smallDesctop} {
        background-image: none;
    }
`

const FlexInfoWrapper = styled.div`
    display: flex;
    @media ${theme.media.mobile} {
        display: flex;
        flex-direction: column;
    }
`




const MainTitleWrapper = styled.div`
    
`

const MainTitle = styled.h1`
    font-size: 32px;
    font-weight: 600;
    color: ${theme.colors.fontTitle};
    span {
        color: ${theme.colors.accent};
    }
`

const AboutMe = styled.h1`
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    margin: 32px 92px 24px 0px;
`

const PhotoContent = styled.div`
    position: relative;
    z-index: 1;
    &::before {
        content: url(${photo_before});
        position: absolute;
        z-index: -1;
        left: -10px;
        top: 184px;
        @media ${theme.media.tablet} {
            top: 40px;
            left: 0;
        }
    }
    &::after {
        content: url(${photo_after});
        position: absolute;
        right: 10px;
        bottom: 56px;
        color: ${theme.colors.accent};

        @media ${theme.media.tablet} {
            bottom: 34px;
    }
    }
`
const PhotoWrapper = styled.div`
`


const Photo = styled.img`
    width: 469px;
    object-fit: cover;

    @media ${theme.media.tablet} {
        width: 316px;
    }
    @media ${theme.media.mobile} {
        width: 100%;
    }
`


const SubtextPhoto = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    border: 1px solid ${theme.colors.font};
    margin-bottom: 112px;
    vertical-align: center;
    position: relative;
    padding: 8px 34px;
    max-width: 450px;
    span {
        font-size: 16px;
        font-weight: 600;
        line-height: normal;
        color: ${theme.colors.fontTitle};
    }
    &::before {
        content: "";
        display: inline-block;
        height: 16px;
        width: 16px;
        background-color: ${theme.colors.accent};
        position: absolute;
        left: 8px;
        top: 10px;
    }

    @media ${theme.media.mobile} {
        max-width: 100%;
        margin-bottom: 30px;
    }
`

const BtnContatMe = styled.button`
    border: 1px solid ${theme.colors.accent};
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    color: ${theme.colors.fontTitle};
    padding: 8px 16px;
`


const CitationText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 24px;
    font-style: normal;
    line-height: normal;
    color: ${theme.colors.fontTitle};
    p {
        font-weight: 500;
        display: block;
        border: 1px solid ${theme.colors.font};
        padding: 32px;
        position: relative;
        &::before {
            content: url(${quotation_marks});
            display:inline-block;
            position: absolute;
            left: 19px;
            top: -14px;
            padding: 0 8px;
            background-color: ${theme.colors.primaryBg};
        }
    }
    span {
        font-weight: 400;
        display: block;
        border: 1px solid ${theme.colors.font};
        padding: 16px;
        width: 165px;
        border-top: 0;
        position: relative;
        &::after {
            content: url(${quotation_marks});
            display:inline-block;
            position: absolute;
            right: 19px;
            top: -14px;
            padding: 0 8px;
            background-color: ${theme.colors.primaryBg};
        }
    }
`