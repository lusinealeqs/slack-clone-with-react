import React from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="Message here..." />
                    <SendButton>
                        <SendIcon />
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    );
}

export default ChatInput;

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`;

const InputContainer = styled.div`
    border: 1px solid #8d8d8e;
    border-radius: 4px;

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;

        input {
            flex: 1;
            border: none;
            font-size: 18px;
        }
        input:focus {
            outline: none;
        }
    }
`;

const SendButton = styled.div`
    background-color: #611f69;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-right: 5px;
    :hover {
        background-color: #3f0e40;
    }

    .MuiSvgIcon-root {
        width: 18px;
        color: white;
    }
`;
