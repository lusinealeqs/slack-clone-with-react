import React from "react";
import styled from "styled-components";

function DefaultPage() {
    return (
        <Container>
            <Content>
                <SlackImg src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png" />
                <h1>
                    You can create a channel or select an excisting one on the
                    sidebar in the left!
                </h1>
            </Content>
        </Container>
    );
}

export default DefaultPage;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    background: white;
    padding: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SlackImg = styled.img`
    height: 100px;
`;
