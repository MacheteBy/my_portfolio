import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Icon } from '../../components/icon/Icon';
import { theme } from '../../styles/Theme';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <AboutYou>
                        <FlexWrapper>
                            <AboutYouName>Vladimir</AboutYouName>
                            <AboutYouEmail>Macheteby@gmail.com</AboutYouEmail>
                        </FlexWrapper>
                        <p>Front-end developer</p>
                    </AboutYou>
                    <SocialIconsWrapper>
                        <SocialIconsList>
                            <SocialIconTitle>Media</SocialIconTitle>
                            <SocialList>
                                <SocialItem>
                                    <SocialLink href='#'>
                                        <Icon iconId={"GithubSvg"} />
                                    </SocialLink>
                                </SocialItem>
                                <SocialItem>
                                    <SocialLink href='#'>
                                        <Icon iconId={"FigmaSvg"} />
                                    </SocialLink>
                                </SocialItem>
                                <SocialItem>
                                    <SocialLink href='#'>
                                        <Icon iconId={"DiscordSvg"} />
                                    </SocialLink>
                                </SocialItem>
                            </SocialList>
                        </SocialIconsList>
                    </SocialIconsWrapper>
                </FlexWrapper>
                <Copyright>© Copyright 2022. Made by Machete</Copyright>
            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    padding: 32px 0;
    border-top: 1px solid ${theme.colors.font};
    @media ${theme.media.mobile} {
        text-align: center;
    }
`

const AboutYou = styled.div`
    display: flex;
    flex-direction: column;
    color: ${theme.colors.fontTitle};
`

const SocialIconsList = styled.div`
    
`

const SocialList = styled.ul`
    display: flex;
    gap: 8px;
    @media ${theme.media.mobile} {
        flex-direction: row;
        justify-content: center;
    }
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    
`

const SocialIconsWrapper = styled.div`
    color: ${theme.colors.fontTitle};
    font-weight: 500;
`

const SocialIconTitle = styled.h3`
    font-size: 24px;
`

const Copyright = styled.small`
    display: flex;
    justify-content: center;
    font-size: 16px;
`


const AboutYouName = styled.h4`
    color: ${theme.colors.fontTitle};
    padding-right: 24px;
    font-weight: 500;
`

const AboutYouEmail = styled.span`
    color: ${theme.colors.font};
`