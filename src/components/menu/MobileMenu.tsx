import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';
import { FlexWrapper } from '../FlexWrapper';

const items = [
    {
        title: "home",
        href: "main"
    },
    {
        title: "works",
        href: "projects"
    },
    {
        title: "about-me",
        href: "aboutMe"
    },
    {
        title: "contacts",
        href: "contacts"
    },
    ]

export const MobileMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)}
    return (
        <StyledMenu>
            <FlexWrapper gap={"30px"}>
                <BurgerButton isOpen={menuIsOpen} onClick={ onBurgerBtnClick }>
                    <span></span>
                </BurgerButton>
                <MobileMenuWrapper isOpen={menuIsOpen} onClick={() => {setMenuIsOpen(false)} }>
                    <FlexWrapper direction='column'>
                        <ul>
                            {items.map((item, index) => {
                                return <li key={index}>
                                <NavLink to={item.href} smooth={true}>{item.title}</NavLink>
                            </li>
                            })}
                        </ul>
                        <form action="lang">
                            <select name="lang" id="lang">
                                <option value="en">EN</option>
                                <option value="ru">RU</option>
                            </select>
                        </form>
                    </FlexWrapper>

                </MobileMenuWrapper>


            </FlexWrapper>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }
`
const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    background-color: ${theme.colors.primaryBg};
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}


        ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    select {
        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.font};
        border: none;
        font-weight: 600;
    }


    a::before {
        content: "#";
        color: ${theme.colors.accent};
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width: 24px;
    height: 24px;
    top: 16px;
    right: 16px;
    z-index: 999999;
    span {
        display: block;
        width: 24px;
        height: 2px;
        background-color: ${theme.colors.fontTitle};
        position: absolute;
        left: 0;
        bottom: 0;
        ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: rotate(45deg) translateY(0);
        `}

        &::after {
            content: "";
            display: block;
            width: 15px;
            height: 2px;
            background-color: ${theme.colors.fontTitle};
            position: absolute;
            transform: translateY(-5px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: rotate(-90deg) translateY(0);
            width: 24px;
            `}
            }
    }
`

const NavLink = styled(Link)`
    
`