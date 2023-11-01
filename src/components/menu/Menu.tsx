import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { FlexWrapper } from '../FlexWrapper';

type menyPropsType = {
    menuItem: Array<string>
}

export const Menu = (props: menyPropsType) => {
    return (
        <StyledMenu>
            <FlexWrapper gap={"30px"}>
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
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
    ul {
        display: flex;
        justify-content: space-around;
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
    @media ${theme.media.tablet} {
        display: none;
    }
`