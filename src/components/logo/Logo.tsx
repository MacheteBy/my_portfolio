import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { FlexWrapper } from '../FlexWrapper';
import { Icon } from '../icon/Icon';

export const Logo = () => {
    return (
        <a href="#">
            <FlexWrapper gap={'8px'} direction='row'>
                <Icon iconId={'LogoSvg'} width={'16px'} height={'17px'} viewBox={"0 0 16 17"} />
                <IconName>VMarchenkov</IconName>
            </FlexWrapper>
        </a>
    );
};

const IconName = styled.span`
    color: ${theme.colors.fontTitle};
`
