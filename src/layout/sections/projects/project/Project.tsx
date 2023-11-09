import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';

type ProjectPropsType = {
    description: string
    name: string
    info: string
    image: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyleProject>
            <ImageProject src={props.image} alt={props.name} />
            <DescriptionProject>{props.description}</DescriptionProject>
            <NameProject>{props.name}</NameProject>
            <InfoProject>{props.info}</InfoProject>
            <Link href={"#"}>Live </Link>
        </StyleProject>
    );
};


const StyleProject = styled.div`
    border: 1px solid ${theme.colors.font};
    max-width: 33%;
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    margin-top: 48px;

    @media ${theme.media.mobile} {
        max-width: 100%;
    }
    @media ${theme.media.tablet} {
        max-width: 100%;
    }
`

const ImageProject = styled.img`
    width: 100%;
`

const DescriptionProject = styled.p`
    padding: 8px;
`

const NameProject = styled.h3`
    border-top: 1px solid ${theme.colors.font};
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    color: ${theme.colors.fontTitle};
    padding: 16px;
`

const InfoProject = styled.p`
    padding: 16px;
`

const Link = styled.a`
    display: inline-block;
    padding: 16px;
    color: ${theme.colors.fontTitle};
    border: 1px solid ${theme.colors.accent};
    padding: 8px 16px;
    margin: 0px 16px 16px 16px;
    &::after {
        content: "<~>";
    }
`