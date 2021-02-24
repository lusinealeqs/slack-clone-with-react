import React from "react";
import styled from "styled-components";
import ChatHeader from "./ChatHeader";

function Chat() {
    return (
        <Container>
            <ChatHeader />
        </Container>
    );
}

export default Chat;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 64px auto;
`;

// const Main = styled.div`
//     ${(props) => {
//         return !props.className ? `background:white` : `background: #252e41`;
//     }};
// `;
