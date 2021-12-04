import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS, QUERIES, TABLET, PHONE } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    return (
        <HeaderWrapper>
            <SuperHeader />
            <MainHeader>
                <Side>
                    <Logo />
                </Side>
                <NavWrapper>
                    <Nav>
                        <NavLink href="/sale">Sale</NavLink>
                        <NavLink href="/new">New&nbsp;Releases</NavLink>
                        <NavLink href="/men">Men</NavLink>
                        <NavLink href="/women">Women</NavLink>
                        <NavLink href="/kids">Kids</NavLink>
                        <NavLink href="/collections">Collections</NavLink>
                    </Nav>
                </NavWrapper>
                <Side />
                <MobileMenuWrapper>
                    <Icon id="shopping-bag" />
                    <Icon id="search" />
                    <MobileMenuHamburger onClick={() => setShowMobileMenu(true)}>
                        <Icon id="menu" />
                    </MobileMenuHamburger>
                </MobileMenuWrapper>
            </MainHeader>
            <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
        </HeaderWrapper>
    );
};

const MobileMenuHamburger = styled.button`
    border: 0;
    background: var(--color-white);
    cursor: pointer;
`;

const HeaderWrapper = styled.header`
    ${QUERIES[TABLET]} {
        border-top: 4px solid var(--color-gray-900);
    }
`;

const MobileMenuWrapper = styled.div`
    display: none;

    ${QUERIES[TABLET]} {
        display: flex;
        gap: 36px;
    }

    ${QUERIES[PHONE]} {
        gap: 16px;
    }
`;

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 18px 32px;
    height: 72px;
    border-bottom: 1px solid var(--color-gray-300);

    ${QUERIES[TABLET]} {
        justify-content: space-between;
        align-items: center;
    }
`;

const NavWrapper = styled.div`
    overflow-y: auto;
    margin: -16px 32px;

    ${QUERIES[TABLET]} {
        display: none;
    }
`;

const Nav = styled.nav`
    display: flex;
    gap: clamp(1rem, 5.1vw - 1rem, 3rem);
    padding: 16px;
`;

const Side = styled.div`
    flex: 1;
`;

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-gray-900);
    font-weight: ${WEIGHTS.medium};
    white-space: nowrap;

    &:first-of-type {
        color: var(--color-secondary);
    }
`;

export default Header;
