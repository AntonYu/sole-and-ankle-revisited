/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS, WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
    return (
        <Overlay isOpen={isOpen} onDismiss={onDismiss}>
            <Content aria-label="Mobile menu">
                <CloseButton onClick={onDismiss}>
                    <VisuallyHidden>Close</VisuallyHidden>
                    <Icon id="close" size={24} aria-hidden />
                </CloseButton>
                <Spacer />
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
                <Footer>
                    <a href="/terms">Terms and Conditions</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/contact">Contact Us</a>
                </Footer>
            </Content>
        </Overlay>
    );
};

const Overlay = styled(DialogOverlay)`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: var(--color-backdrop);
    display: flex;
    justify-content: flex-end;
`;

const Content = styled(DialogContent)`
    background: var(--color-white);
    display: flex;
    flex-direction: column;
    width: 300px;
    justify-content: center;
    padding: 32px;
    position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 0;
    border: 0;
    padding: 16px;
    background: transparent;
    color: var(--color-gray-900);
    cursor: pointer;
`;

const Spacer = styled.div`
    flex: 1;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const NavLink = styled.a`
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-gray-900);
    font-size: ${18 / 16}rem;
    font-weight: ${WEIGHTS.medium};

    &:first-of-type {
        color: var(--color-secondary);
    }
`;

const Footer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 14px;
    flex: 1;
    justify-content: flex-end;

    a {
        text-decoration: none;
        color: var(--color-gray-700);
        font-size: ${14 / 16}rem;

        &:hover {
            color: var(--color-secondary);
        }
    }
`;

export default MobileMenu;
