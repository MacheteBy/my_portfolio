import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { MobileMenu } from '../../components/menu/MobileMenu';
import { theme } from '../../styles/Theme';


const items = ["home", "works", "about-me", "contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify='space-between'>
                    <Logo />
                    <Menu menuItem={items} />
                    <MobileMenu menuItem={items}/>
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
    a, li{
       color: ${theme.colors.font}; 
    }
    
    a:hover {
        color: ${theme.colors.fontTitle};
    }

    /* @media ${theme.media.mobile} {
        display: block;
    } */
    ${FlexWrapper} {

    }
`

