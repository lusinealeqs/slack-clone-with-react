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
                    <ChannelName># CleverProgrammer </ChannelName>
                    <StarOutlineIcon />
                </FirstRow>
                <ChannelInfo>
                    Company-wide announcements and work-based matters
                </ChannelInfo>
            </Main>
            <UserContainer>
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
    font-weight: 700;
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

const ChannelInfo = styled.div`
    font-weight: 400;
    font-size: 13px;
    color: #606060;
`;

const UserContainer = styled.div`
    padding-right: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
`;
