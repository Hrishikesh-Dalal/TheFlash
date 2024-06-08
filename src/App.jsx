// App.js
import React from 'react';
import Header from "./Header";
import Names from "./Names";
import Footer from "./Footer";
import { Card, Card2 } from "./Card"; // Named imports
import { List, List2, List3} from './Lists';
import Button from './Button';
import Counter from './Counter';
import Form from './TeamForm(Payment)';
import Trivia from './Trivia';
import Todo from './todo';
import ArrayList from './ArrayList';
import WidthHeight from './WidthHeight';
import Clock from './Clock';
import MazeA from './MazeA';
import SaveIt from './Reference';
import Stopwatch from './Stopwatch';

function App() {
    const heroes = [
        { id: 1, name: 'The Flash', hp: 75 },
        { id: 2, name: 'Iris West', hp: 50},
        { id: 3, name: 'Vibe', hp: 60 },
        { id: 4, name: 'Killer Frost',hp: 45 },
        { id: 5, name: 'Elongated Man', hp: 65 },
        { id: 6, name: 'Firestorm', hp: 80 },
      ];

    const villains = [
        { id: 1, name: 'Reverse-Flash' },
        { id: 2, name: 'Zoom' },
        { id: 3, name: 'Savitar' },
        { id: 4, name: 'The Thinker' },
        { id: 5, name: 'Cicada' },
        { id: 6, name: 'Bloodwork' },
    ];

    return (
        <>
            <Header />
            {/* <Names /> */}
            <Clock/>
            <Todo/>
            <SaveIt/>
            <WidthHeight/>
            <Stopwatch/>
            <ArrayList/>
            <Form/>
            <Trivia/>
            <Counter/>
            <Button/>
            {heroes.length > 0 && <List list= {heroes} cat= "Heroes"/>}
            {villains.length > 0 && <List3 list = {villains} cat = "Villains"/>}
            {/* <List2/> */}
            <MazeA/>
            <Card />
            <Card2 
                name="Hrishikesh Dalal"
                alive={true}
                desc="My name is Hrishikesh Dalal And I can do Speed Mirage"
                src="https://images2.minutemediacdn.com/image/upload/c_crop,w_1085,h_610,x_0,y_11/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/ImageExchange/mmsport/308/01hqhtz4pdvwqnxygqrx.jpg"
            />
            <Card2 
                name="Pooh Dalal"
                alive={false}
                desc="You and I are alike in many ways"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIuIOiY5m4UzIx-EI0Dkb65nMUfsoOjOb48g&s" 
            />
            <Card2 
              name = "Friend Pooh"
            ></Card2>
            <Footer />
        </>
    );
}

export default App;
