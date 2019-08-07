import React from 'react';
import User from "./User";
import photo from './user.png'

class Talita extends React.Component {
    render() {
        return (
            <div>
                Eu sou uma componente chamada Talita
                <User name="Talita" photo={photo}></User>
                <User name="João"></User>
                <User name="Maria"></User>
            </div>
        );
    }
}

export default Talita;
