import React from "react";
import styled from "styled-components";

function ChatMessage({ text, name, image, timestamp }) {
    return (
        <Container>
            <UserAvatar>
                <img src={image} alt="" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    {name}{" "}
                    <span>{new Date(timestamp.toDate()).toUTCString()}</span>
                </Name>
                <Text>{text}</Text>
            </MessageContent>
        </Container>
    );
}

export default ChatMessage;

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
    :hover {
        background-color: #3f0e40;
        color: white;
    }
`;

const UserAvatar = styled.div`
    // width: 36px;
    // height: 36px;
    border-radius: 2px;
    overflow: hidden;
    // margin-right: 8px;
    height: 60px;
    width: 60px;
    margin-right: 15px;
    margin-left: 10px;

    img {
        width: 100%;
    }
`;

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const Name = styled.div`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;

    span {
        margin-left: 8px;
        font-weight: 400;
        color: rgba(97, 96, 97);
        font-size: 13px;
    }
`;

const Text = styled.div``;
