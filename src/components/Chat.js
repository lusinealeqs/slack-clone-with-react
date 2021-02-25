import React from "react";
import styled from "styled-components";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

function Chat() {
    return (
        <Container>
            <ChatHeader />
            <MessageContainer>
                <ChatMessage />
            </MessageContainer>
            <ChatInput />
        </Container>
    );
}

export default Chat;

const Container = styled.div`
    // width: 100%;
    // height: 100vh;
    display: grid;
    grid-template-rows: 64px auto min-content;
`;

const MessageContainer = styled.div``;

// const Main = styled.div`
//     ${(props) => {
//         return !props.className ? `background:white` : `background: #252e41`;
//     }};
// `;
