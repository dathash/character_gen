import React from 'react'

function TableHeader() {
    return (
        <thead>
            <tr>
                <th>Strength</th>
                <th>Dexterity</th>
                <th>Constitution</th>
                <th>Intelligence</th>
                <th>Wisdom</th>
                <th>Charisma</th>
            </tr>
        </thead>
    );
}

function TableBody(props) {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.str}</td>
                <td>{row.dex}</td>
                <td>{row.con}</td>
                <td>{row.int}</td>
                <td>{row.wis}</td>
                <td>{row.cha}</td>
            </tr>
        );
    });
    return (
        <tbody>
            {rows}
        </tbody>
    );
}

function Table(props) {
    return (
        <table>
            <TableHeader />
            <TableBody characterData={props.characterData} />
        </table>
    );
}

export default Table;