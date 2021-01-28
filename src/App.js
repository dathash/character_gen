import React from 'react'
import Table from './Table'

const characters = [
    {
        name: 'One',
        str: '10',
        dex: '10',
        con: '10',
        int: '10',
        wis: '10',
        cha: '10',
    },
    {
        name: 'Two',
        str: '10',
        dex: '10',
        con: '10',
        int: '10',
        wis: '10',
        cha: '10',
    },
    {
        name: 'Three',
        str: '10',
        dex: '10',
        con: '10',
        int: '10',
        wis: '10',
        cha: '10',
    },
    {
        name: 'Four',
        str: '10',
        dex: '10',
        con: '10',
        int: '10',
        wis: '10',
        cha: '10',
    },
];

function App() {
    return (
      <div className='container'>
        <h1>Welcome to Character Generation!</h1>
        <Table characterData={characters} />
      </div>
    );
}

export default App;