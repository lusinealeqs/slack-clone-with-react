import React from "react";
import styled from "styled-components";

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://i.imgur.com/aLtLJ0v.gif" alt="" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    Lusine <span>Wed Feb 24 2021 22:35</span>
                </Name>
                <Text>
                    This is the BEST Challenge, Guys !!!!!!!! Thank You all so
                    much for this opportunity 😍🚀{" "}
                </Text>
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
    width: 36px;
    height: 36px;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 8px;

    img {
        width: 100%;
    }
`;

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
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
