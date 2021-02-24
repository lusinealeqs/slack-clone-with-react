import React from "react";
import styled from "styled-components";
import CreateIcon from "@material-ui/icons/Create";
import { sidebarItemsData } from "../data/SidebarData";
import { sidebarChannelsData } from "../data/SidebarData";
import AddIcon from "@material-ui/icons/Add";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Sidebar() {
    return (
        <Container>
            <WorkspaceContainer>
                <Name>CleverProgrammer</Name>
                <NewMessage>
                    <CreateIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {sidebarItemsData.map((item) => (
                    <MainChannelItem>
                        {item.icon}
                        {item.text}
                    </MainChannelItem>
                ))}
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <ArrowDiv>
                        <ArrowDropDownIcon className="dropdown" />
                    </ArrowDiv>
                    <div>Channels</div>
                    <AddIconDiv>
                        <AddIcon className="addIcon" />
                    </AddIconDiv>
                </NewChannelContainer>
                <ChannelsList>
                    {sidebarChannelsData.map((list) => (
                        <Channel>{list.text}</Channel>
                    ))}
                </ChannelsList>
            </ChannelsContainer>
        </Container>
    );
}

export default Sidebar;

const Container = styled.div`
    background: #3f0e40;
    position: relative;
`;

const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
`;

const Name = styled.div``;

const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: white;
    color: #3f0e40;
    fill: #3f0e40;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
`;

const MainChannels = styled.div`
    padding-top: 20px;
`;

const MainChannelItem = styled.div`
    color: rgb(188, 171, 188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #350d36;
    }
`;

const ChannelsContainer = styled.div`
    color: rgb(188, 171, 188);
    margin-top: 10px;
`;

const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 19px;
    padding-right: 12px;
    cursor: pointer;
`;

const ChannelsList = styled.div``;

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #350d36;
    }
`;

const ArrowDiv = styled.div`
    width: 25px;
    height: 26px;
    border-radius: 25%;
    cursor: pointer;

    .dropdown {
        width: 100%;
        border-radius: 25%;
    }
    .dropdown:hover {
        background-color: rgba(255, 255, 255, 0.171);
    }
`;

const AddIconDiv = styled.div`
    width: 25px;
    height: 26px;
    border-radius: 25%;
    cursor: pointer;

    .addIcon {
        width: 100%;
        border-radius: 25%;
        padding: 2px;
    }
    .addIcon:hover {
        background-color: rgba(255, 255, 255, 0.171);
    }
`;
