import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';

type SkillPropsType = {
    skillTitle: string
    skillText: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillTitle>
                {props.skillTitle}
            </SkillTitle>
            <SkillText>
                {props.skillText}
            </SkillText>
        </StyledSkill>
    );
};


const StyledSkill = styled.div`
    border: 1px solid ${theme.colors.font};
    color: ${theme.colors.font};
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    min-width: 180px;

    @media ${theme.media.mobile} {
        min-width: 90vw;
    }
    @media ${theme.media.tablet} {
        min-width: 90vw;
    }
`

const SkillTitle = styled.h3`
    color: ${theme.colors.fontTitle};
    border-bottom: 1px solid ${theme.colors.font};;
    padding: 8px;
`

const SkillText = styled.p`
    padding: 8px;
`