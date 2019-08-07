import React from 'react';
import User from "./User";
import photo from './user.png'

class List extends React.Component {
    render() {
        let list = [
            {
                name:"Talita",
                email:"talitasv20@gmail.com"
            },
            {
                name:"João",
                email:"joao@gmail.com"
            }
        ]
        return (
            <div>
                <table border="1">
                    <tr>
                        <th>Name</th>
                        <th>E-mail</th>
                    </tr>
                    {list.map((item) => {
                        return <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.email}
                            </td>
                        </tr>
                    })}
                </table>
            </div>
        );
    }
}

export default List;
