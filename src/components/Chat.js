import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import { IconButton } from "@material-ui/core";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import db from "../firebase";
import { useParams } from "react-router-dom";
import firebase from "firebase";

function Chat({ user }) {
    let { channelId } = useParams();
    const [channel, setChannel] = useState();
    const [messages, setMessages] = useState([]);

    const sendMessage = async (text) => {
        if (channelId) {
            let payload = {
                text: text,
                timestamp: firebase.firestore.Timestamp.now(),
                user: user.name,
                userImage: user.photo,
            };

            const data = await db
                .collection("rooms")
                .doc(channelId)
                .collection("messages")
                .add(payload);
            console.log(data);
        }
    };
    useEffect(() => {
        db.collection("rooms") //getting the channel
            .doc(channelId)
            .onSnapshot((snapshot) => {
                setChannel(snapshot.data());
            });
        db.collection("rooms") //getting the messages
            .doc(channelId)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot((snapshot) => {
                let messages = snapshot.docs.map((doc) => doc.data());
                setMessages(messages);
            });
    }, [channelId]);

    return (
        <Container>
            <Header>
                <Main>
                    <FirstRow>
                        <ChannelName># {channel && channel.name} </ChannelName>
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
            </Header>
            <MessageContainer>
                {messages.length > 0 &&
                    messages.map((data, index) => (
                        <ChatMessage
                            text={data.text}
                            name={data.user}
                            image={data.userImage}
                            timestamp={data.timestamp}
                        />
                    ))}
            </MessageContainer>
            <ChatInput sendMessage={sendMessage} />
        </Container>
    );
}

export default Chat;

const Container = styled.div`
    // width: 100%;
    // height: 100vh;
    display: grid;
    grid-template-rows: 64px auto min-content;
    min-height: 0;
`;

const Header = styled.div`
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

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;
