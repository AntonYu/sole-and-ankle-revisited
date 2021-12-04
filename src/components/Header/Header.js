import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS, QUERIES, TABLET, PHONE } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    return (
        <HeaderWrapper>
            <SuperHeader />
            <MainHeader>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
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
                <MobileMenuWrapper>
                    <UnstyledButton>
                        <VisuallyHidden>Open cart</VisuallyHidden>
                        <Icon id="shopping-bag" />
                    </UnstyledButton>
                    <UnstyledButton>
                        <VisuallyHidden>Open search</VisuallyHidden>
                        <Icon id="search" />
                    </UnstyledButton>
                    <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                        <VisuallyHidden>Open menu</VisuallyHidden>
                        <Icon id="menu" />
                    </UnstyledButton>
                </MobileMenuWrapper>
                <Filler />
            </MainHeader>
            <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
        </HeaderWrapper>
    );
};

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

    ${QUERIES[PHONE]} {
        padding-left: 16px;
        padding-right: 16px;
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

const LogoWrapper = styled.div`
    flex: 1;

    ${QUERIES[TABLET]} {
        flex: revert;
    }
`;

const Filler = styled.div`
    flex: 1;

    ${QUERIES[TABLET]} {
        display: none;
    }
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
