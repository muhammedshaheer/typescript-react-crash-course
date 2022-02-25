import { useState } from 'react';
import List from './components/List';

import './App.css';

interface IState {
    people: {
        name: string
        age: number
        url: string
        note?: string
    }[]
}

function App() {
    const [people, setPeople] = useState<IState["people"]>([
        {
            name: "LeBron James",
            url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
            age: 36,
            note: "Allergic to stay on the same team"
        },
        {
            name: "Kobe Bryant",
            url: "https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg",
            age: 42
        }
    ]);

    return (
        <div className="App">
            <h1>People Invited to my Party</h1>
            <List people={people} />
        </div>
    );
}

export default App;
