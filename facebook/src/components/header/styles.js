import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #3b5998;
    padding-left: 15%;
    border-bottom: thin solid #aaa;
    > div {
        width: 55%;
        display: flex;
        padding: 5px 0;
        background-color: ${({ theme: { primaryColor } }) => primaryColor};
        font-size: .7rem;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }
    .nav-actions-box {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
        .nav-box {
            display: flex;
        }
        .divide-border {
            border-left: thin solid ${({ theme: { terciaryColor } }) => terciaryColor};
            *:not(:last-child) {
                margin-right: 7px;
            }
        }
        .action-box {
            padding: 0 7px;
        }
    }
`;

export const StyledNavLink = styled(NavLink)`
    outline: none;
    text-decoration: none;
    color: #fff;
    border-radius: 4px;
    padding: 2px 5px;
    font-weight: 600;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme: { terciaryColor } }) => terciaryColor};
    }
`;

export const StyledHeaderIcon = styled.span`
    cursor: pointer;
    font-size: .9rem;
    color: ${({ theme: { blankColor } }) => blankColor};
    &:hover {
        color: ${({ theme: { terciaryColor } }) => terciaryColor};
    }
`;

const StyledLogoBox = styled.div`
    border-radius: 50%;
    width: 17px;
    height: 17px;
    overflow: hidden;
    display: inline-block;
    img {
        width: 17px;
    }
`;

export const StyledLogo = ({ imgSrc, style, className }) => {
    return (
        <StyledLogoBox style={style} className={className}>
            <img src={imgSrc} alt="user logo" />
        </StyledLogoBox>
    )
} 