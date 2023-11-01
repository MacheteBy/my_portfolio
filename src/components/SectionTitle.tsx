import styled from "styled-components";
import { theme } from "../styles/Theme";

type SectionTitlePropsType = {
    afterWidth: string 
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    color: ${theme.colors.fontTitle};
    margin: 0;
    font-family: Fira Code;
    font-size: 32px;
    font-weight: 500;
    line-height: normal;
    position: relative;
    span::before {
        content: "#";
        color: ${theme.colors.accent};
    }
    span {
        position: relative;
    }
        &::after {
            content: "";
            display: inline-block;
            width: ${props => props.afterWidth};
            height: 1px;
            background-color: ${theme.colors.accent};
            margin-left: 16px;
            position: absolute;
            top: 20px;
            @media ${theme.media.tablet} {
                width: 50vw;
            }
            @media ${theme.media.mobile} {
                width: 30vw;
            }
           
    }
`