import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
    outline: none;
    text-decoration: none;
    text-transform: uppercase;
    font-size: .85rem;
    color: #757575;
    &:hover {
        color: #454545;
    }
    &:active {
        color: #000;
    }
`;