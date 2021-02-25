import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import db from "./firebase";
import styled from "styled-components";

function App() {
    const [rooms, setRooms] = useState([]);

    const getChannels = () => {
        db.collection("rooms").onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                setRooms(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, name: doc.data().name };
                    })
                );
            });
        });
    };

    useEffect(() => {
        getChannels();
    }, []);

    return (
        <div className="App">
            <Router>
                <Container>
                    <Header />
                    <Main>
                        <Sidebar rooms={rooms} />
                        <Switch>
                            <Route path="/room" exact component={Chat} />
                            <Route path="/" exact component={Login} />
                        </Switch>
                    </Main>
                </Container>
            </Router>
        </div>
    );
}

export default App;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 38px auto;
`;

const Main = styled.div`
    display: grid;
    grid-template-columns: 260px auto;
`;
