import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';
import { FlexWrapper } from '../FlexWrapper';

type menyPropsType = {
    menuItem: Array<string>
}

export const MobileMenu = (props: menyPropsType) => {
    return (
        <StyledMenu>
            <FlexWrapper gap={"30px"}>
                <BurgerButton isOpen={false}>
                    <span></span>
                </BurgerButton>
                <MobileMenuWrapper isOpen={false}>
                    <FlexWrapper direction='column'>
                        <ul>
                            {props.menuItem.map((item: string, index: number) => {
                                return <li key={index}>
                                    <a href="#">{item}</a>
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
        /* justify-content: space-around; */
        gap: 30px;
    }

    select {
        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.font};
        border: none;
        font-family: 'Fira Code';
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