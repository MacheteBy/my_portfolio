import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Icon } from '../../components/icon/Icon';
import { SectionTitle } from '../../components/SectionTitle';
import { theme } from '../../styles/Theme';
import photo_after from '../../assets/images/Photo_after.svg';

export const Contacts = () => {
    return (
        <StyledContacts id={'contacts'}>
            <Container>
                <SectionTitle afterWidth={"125px"}><span>contacts</span></SectionTitle>
                <FlexWrapper justify={'space-between'} padding={"46px 0"}>
                    <ContactInform>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</ContactInform>
                    <MessageMeHere>
                        <MessageMeHereTitle>Message me here</MessageMeHereTitle>
                        <FlexWrapper>
                            <FlexWrapperMobile>
                                <Icon iconId={"DiscordSvg"} width={"32px"} height={"32px"} /><MessageMeHereContact>Macheteby</MessageMeHereContact>
                            </FlexWrapperMobile>
                        </FlexWrapper>
                        <FlexWrapper>
                            <FlexWrapperMobile>
                                <Icon iconId={"EmailSvg"} width={"32px"} height={"32px"} /><MessageMeHereContact>Macheteby@gmail.com</MessageMeHereContact>
                            </FlexWrapperMobile>
                        </FlexWrapper>
                    </MessageMeHere>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};



const StyledContacts = styled.section`
    background-image: url(${photo_after});  
    background-repeat: no-repeat;
    background-position: -2% 24%;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    padding-bottom: 146px;
    position: relative;

    @media ${theme.media.mobile} {
        padding-bottom: 20px;
    }
    @media ${theme.media.smallDesctop} {
        background-image: none;
    }
`

const ContactInform = styled.p`
    width: 48%;
    @media ${theme.media.mobile} {
        width: 100%;
        padding-bottom: 10px;
    }
`

const MessageMeHere = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${theme.colors.font};
    padding: 16px;
    min-width: 250px;

    @media ${theme.media.mobile} {
        padding: 16px;

    }
`

const FlexWrapperMobile = styled.div`
        @media ${theme.media.mobile} {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

    }
`

const MessageMeHereTitle = styled.h4`
    color: ${theme.colors.fontTitle};
    font-weight: 600;
`

const MessageMeHereContact = styled.p`
padding: 6px;
`