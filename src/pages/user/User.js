import React from 'react';
import UserForm from "./UserForm";

class User extends React.Component {
    render() {
        let list = [
            {
                name: "Talita",
                email: "talitasv20@gmail.com"
            },
            {
                name: "João",
                email: "joao@gmail.com"
            }
        ]
        return (
            <div>
                <UserForm></UserForm>
                <table border="1">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>E-mail</th>
                    </tr>
                    </thead>
                    {list.map((item, key) => {
                        return <tbody key={key.toString()}>
                        <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.email}
                            </td>
                        </tr>
                        </tbody>
                    })}
                </table>
            </div>
        );
    }
}

export default User;
