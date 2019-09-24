import React from 'react';
import { StyledNavLink } from '../text/index';
import './styles.scss';

export default () => {
    return (
        <>
            <header></header>
            <nav className="nav-box">
                <ul>
                    <li><StyledNavLink to="/home">home</StyledNavLink></li>
                    <li><StyledNavLink to="/home">onezero</StyledNavLink></li>
                    <li><StyledNavLink to="/home">elemental</StyledNavLink></li>
                    <li><StyledNavLink to="/home">gen</StyledNavLink></li>
                    <li><StyledNavLink to="/home">zora</StyledNavLink></li>
                    <li><StyledNavLink to="/home">forge</StyledNavLink></li>
                    <li><StyledNavLink to="/home">human parts</StyledNavLink></li>
                    <li><StyledNavLink to="/home">marker</StyledNavLink></li>
                    <li><StyledNavLink to="/home">self</StyledNavLink></li>
                    <li><StyledNavLink to="/home">tech</StyledNavLink></li>
                    <li><StyledNavLink to="/home">heated</StyledNavLink></li>
                    <li><StyledNavLink to="/home">modus</StyledNavLink></li>
                    <li><StyledNavLink to="/home">more</StyledNavLink></li>
                </ul>
            </nav>
        </>
    )
}