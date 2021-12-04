import React from "react";
import styled from "styled-components/macro";

import { PHONE, QUERIES, TABLET, WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeBreadcrumbs = () => {
    return (
        <Breadcrumbs>
            <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
    );
};

const ShoeIndex = ({ sortId, setSortId }) => {
    return (
        <Wrapper>
            <MainColumn>
                <Header>
                    <div>
                        <MobileBreadcrumbs>
                            <ShoeBreadcrumbs />
                        </MobileBreadcrumbs>
                        <Title>Running</Title>
                    </div>
                    <SortFilterWrapper>
                        <Select label="Sort" value={sortId} onChange={(ev) => setSortId(ev.target.value)}>
                            <option value="newest">Newest Releases</option>
                            <option value="price">Price</option>
                        </Select>
                    </SortFilterWrapper>
                </Header>
                <Spacer size={32} />
                <ShoeGrid />
            </MainColumn>
            <LeftColumn>
                <DesktopBreadcrumbs>
                    <ShoeBreadcrumbs />
                </DesktopBreadcrumbs>
                <Spacer size={42} />
                <ShoeSidebar />
            </LeftColumn>
        </Wrapper>
    );
};

const SortFilterWrapper = styled.div`
    ${QUERIES[PHONE]} {
        display: none;
    }
`;

const DesktopBreadcrumbs = styled.div`
    ${QUERIES[TABLET]} {
        display: none;
    }
`;

const MobileBreadcrumbs = styled.div`
    display: none;

    ${QUERIES[TABLET]} {
        display: revert;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: baseline;
    gap: 32px;

    ${QUERIES[TABLET]} {
        position: relative;
    }
`;

const LeftColumn = styled.div`
    flex-basis: 248px;

    ${QUERIES[TABLET]} {
        display: none;
    }
`;

const MainColumn = styled.div`
    flex: 1;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    ${QUERIES[TABLET]} {
        align-items: flex-end;
    }
`;

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
