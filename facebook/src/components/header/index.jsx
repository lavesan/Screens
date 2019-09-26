import React from 'react';
import { StyledHeader, StyledNavLink, StyledHeaderIcon, StyledLogo } from './styles';
import faceLogo from '../../assets/facebook-logo.jpg';
import userLogo from '../../assets/roxas.jpg';
import { StyledNeutralInput } from '../input';

export default () => (
    <StyledHeader>
        <div className="">
            <img src={faceLogo} alt="Facebook logo" width="30" />
            <StyledNeutralInput type="text" placeholder="Search" />
            <div className="nav-actions-box">
                <nav className="nav-box">
                    <StyledNavLink to="/home">
                        <StyledLogo style={{ marginRight: 4 }} imgSrc={userLogo} /> Sora
                    </StyledNavLink>
                    <StyledNavLink to="/home" className="divide-border">Página inicial</StyledNavLink>
                    <StyledNavLink to="/home" className="divide-border">Criar</StyledNavLink>
                </nav>
                <aside className="divide-border action-box">
                    <StyledHeaderIcon className="fas fa-user-friends"></StyledHeaderIcon>
                    <StyledHeaderIcon className="fas fa-comment-dots"></StyledHeaderIcon>
                    <StyledHeaderIcon className="fas fa-bell"></StyledHeaderIcon>
                </aside>
                <aside className="divide-border action-box">
                    <StyledHeaderIcon className="fas fa-question-circle"></StyledHeaderIcon>
                    <StyledHeaderIcon className="fas fa-arrow-down"></StyledHeaderIcon>
                </aside>
            </div>
        </div>
    </StyledHeader>
)