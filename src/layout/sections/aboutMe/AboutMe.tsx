import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { theme } from '../../../styles/Theme';
import photo from '..//..//..//assets//images/Photo_2.png'
import photo_after from '../../../assets/images/Photo_after.svg';
import Photo_after_min from '../../../assets/images/Photo_after_min.svg';
import background_about_square from '../../../assets/images/background_about_square.svg';


export const AboutMe = () => {
    return (
        <StyledSectionAboutMe id={'aboutMe'}>
            <Container>
                <SectionTitle afterWidth={"326px"}><span>about-me</span></SectionTitle>
                <FlexWrapper>
                    <FlexWrapper direction={"column"} padding={"24px 0"}>
                        <TextAboutMe>Hello, i’m Elias!</TextAboutMe>
                        <br />
                        <TextAboutMe>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </TextAboutMe>
                        <br />
                        <TextAboutMe>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</TextAboutMe>
                        <BtnContatMe>Read more</BtnContatMe>
                    </FlexWrapper>
                    <PhotoWrapper>
                        <WrapperBefore>
                            <Photo src={photo} alt="photo" />
                        </WrapperBefore>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledSectionAboutMe>
    );
};




const StyledSectionAboutMe = styled.section`
background-image: url(${photo_after}), url(${background_about_square});
background-repeat: no-repeat;
background-position: 101% 60%,0% 40%;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 26px;
color: ${theme.colors.font};
padding-bottom: 112px;
position: relative;
overflow-x: hidden;
@media ${theme.media.tablet} {
    padding-bottom: 20px;
}
@media ${theme.media.mobile} {
    padding-bottom: 20px;
}
@media ${theme.media.smallDesctop} {
        background-image: none;
    }
`

const TextAboutMe = styled.p`
    width: 65%;
    @media ${theme.media.tablet} {
        width: 100%;
    }
    @media ${theme.media.mobile} {
        width: 100%;
    }

`
const PhotoWrapper = styled.div`
    position: relative;
    
    &::before {
        content: url(${photo_after});
        position: absolute;
        left: 18px;
        top: 30px;
        z-index: 0;
        @media ${theme.media.tablet} {
            left: 24vh;
            top: 10vh;
        }
        @media ${theme.media.mobile} {
            left: 20vw;
            top: 14vh;
        }
    }
    &::after {
        content: url(${Photo_after_min});
        position: absolute;
        right: 16px;
        bottom: 28px;
        z-index: 2;
        @media ${theme.media.smallDesctop} {
            right: 2vh;
            top: 40vh;
        }
        @media ${theme.media.tablet} {
            right: 22vw;
            top: 44vh;
        }
        @media ${theme.media.mobile} {
            right: 22vw;
            top: 44vh;
        }
        
    }

    @media ${theme.media.tablet} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        }
`

const WrapperBefore = styled.div`
    position: relative;
    &::after {
        content: "";
            background-color: ${theme.colors.accent};
            position: absolute;
            width: 320px;
            height: 1px;
            bottom: 6px;
            left: 0;
            @media ${theme.media.tablet} {
                bottom: -2px;
                left: 0;  
                width: 80vw;
            }
            @media ${theme.media.mobile} {
                bottom: -2px;
                left: 0;  
                width: 80vw;
            }
    }

    @media ${theme.media.tablet} {
        max-width: 100vw;
        display: flex;
        flex-direction: column;
    }
    @media ${theme.media.mobile} {
        max-width: 100vw;
        display: flex;
        flex-direction: column;
    }

    
`

const Photo = styled.img`
    max-width: 300px;
    position: relative;
    z-index: 1;
    @media ${theme.media.tablet} {
        max-width: 70vw;
        margin: 0 auto;
    }
    @media ${theme.media.mobile} {
        max-width: 100vw;
    }
`


const BtnContatMe = styled.button`
    border: 1px solid ${theme.colors.accent};
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    color: ${theme.colors.fontTitle};
    padding: 8px 16px;
    max-width: 150px;
    margin-top: 27px;
    &::after {
        content: " ->"
    }
`