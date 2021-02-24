import React from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import { IconButton } from "@material-ui/core";

function ChatHeader() {
    return (
        <Container>
            <Main>
                <FirstRow>
                    <ChannelName># Channel 1 </ChannelName>
                    <StarOutlineIcon />
                </FirstRow>
                <SecondRow>Clever Programmer's first channel</SecondRow>
            </Main>
            <UserContainer>
                Details
                <IconButton>
                    <InfoOutlinedIcon />
                </IconButton>
            </UserContainer>
        </Container>
    );
}

export default ChatHeader;

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto 12%;
    box-shadow: 0 1px 1px -1px #71747a;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 16px;
    padding-left: 8px;
    padding-top: 8px;
`;

const ChannelName = styled.div`
    font-weight: 100;
`;

const FirstRow = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 6px;
    .MuiSvgIcon-root {
        font-size: 1.1rem;
    }
`;

const SecondRow = styled.div`
    font-size: 0.9rem;
`;

const UserContainer = styled.div`
    padding-right: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
`;
