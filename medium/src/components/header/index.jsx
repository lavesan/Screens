import React from 'react';
import { StyledNavLink } from '../text';
import MediumName from '../../assets/imgs/medium_name.png';
import { NeutralButton } from '../button';
import './styles.scss';

export default () => {
    return (
        <>
            <header>
                <img 
                    src={MediumName} 
                    alt="Medium name"
                    width="130" />
                <aside className="config-box">
                    <span className="fas fa-search"></span>
                    <span className="far fa-bell"></span>
                    <NeutralButton>Upgrade</NeutralButton>
                    <div className="user-img-box">
                        <img 
                            src="https://i.pinimg.com/736x/d1/93/15/d1931587122295237f1637f09460ebf3.jpg"
                            alt="User logo" />
                    </div>
                </aside>
            </header>
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