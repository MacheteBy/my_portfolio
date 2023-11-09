import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Icon } from '../../components/icon/Icon';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { MobileMenu } from '../../components/menu/MobileMenu';
import { theme } from '../../styles/Theme';




export const Header = () => {
    return (
        <StyledHeader>
            <SocialList>
                <SocialItem>
                    <SocialLink href='#'>
                        <Icon iconId={"GithubSvg"} />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink href='#'>
                        <Icon iconId={"DribbleSvg"} />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink href='#'>
                        <Icon iconId={"FigmaSvg"} />
                    </SocialLink>
                </SocialItem>
            </SocialList>
            <Container>
                <FlexWrapper justify='space-between' direction='row'>
                    <Logo />
                    <Menu />
                    <MobileMenu />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};



const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    display: flex;
    align-items: flex-end;
    min-height: 60px;
    display: block;
    padding: 12px 0px;
    a, li{
       color: ${theme.colors.font}; 
    }
    
    a:hover {
        color: ${theme.colors.fontTitle};
    }

    ${FlexWrapper} {
    @media ${theme.media.tablet} {
    flex-direction: row;
    gap: 10;
    padding: 6px 0px;
}
}

`

const SocialList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: absolute;
    top: 256px;
    left: 17px;
    z-index: 2;
    &::before{
        content: "";
        background: ${theme.colors.font};
        width: 1px;
        height: 390px;
        left: 14px;
        top: -390px;
        position: absolute;
    }

    @media ${theme.media.smallDesctop} {
        display: none;
    }
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    
`
