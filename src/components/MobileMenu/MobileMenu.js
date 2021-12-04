/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <Overlay>
            <Content aria-label="Mobile menu">
                <CloseButton onClick={onDismiss}>
                    <VisuallyHidden>Close</VisuallyHidden>
                    <span aria-hidden>
                        <Icon id="close" size={24} />
                    </span>
                </CloseButton>
                <Spacer />
                <Nav>
                    <a href="/sale">Sale</a>
                    <a href="/new">New&nbsp;Releases</a>
                    <a href="/men">Men</a>
                    <a href="/women">Women</a>
                    <a href="/kids">Kids</a>
                    <a href="/collections">Collections</a>
                </Nav>
                <Spacer />
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
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--color-overlay);
`;

const Content = styled(DialogContent)`
    background: var(--color-white);
    display: flex;
    flex-direction: column;
    margin-left: 25%;
    height: 100%;
    justify-content: center;
    padding: 32px;
    position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 26px;
    right: 16px;
    border: 0;
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
    gap: 22px;

    a {
        text-transform: uppercase;
        text-decoration: none;
        color: var(--color-gray-900);
        font-size: ${18 / 16}rem;

        &:hover {
            color: var(--color-secondary);
        }
    }
`;

const Footer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 14px;

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
