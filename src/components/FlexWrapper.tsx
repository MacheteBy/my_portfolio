import styled from "styled-components";
import { theme } from "../styles/Theme";


type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    padding?: string
}


export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "none"};
    height: 100%;
    padding: ${props => props.padding || "0px"};

    @media ${theme.media.mobile} {
        flex-direction: column;
        gap: 10;
        padding: 0px 0px;
    }
    @media ${theme.media.tablet} {
        flex-direction: column;
        gap: 10;
        padding: 0px 0px;
    }
`