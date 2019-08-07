import React from 'react';

class User extends React.Component {
    render() {
        return (
            <div>
                <div>
                    Nome: {this.props.name}
                </div>
                <div>
                    Foto: <img src={this.props.photo}/>
                </div>
            </div>
        );
    }
}

export default User;
