import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
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

export const Menu = () => {
    return (
        <StyledMenu>
            <FlexWrapper gap={"30px"}>
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

const NavLink = styled(Link)`
    
`