import React from 'react';
import {Link, Route} from 'react-router-dom'
import './App.css';
import routesConfig from "./routesConfig";

class App extends React.Component {
    /*constructor(props) {
            super(props)
            this.state = {
                name: "Talita",
                email:"talitasv20@gmail.com"
            }
            this.changeState = this.changeState.bind(this)
            this.resetState = this.resetState.bind(this)
            this.changeInput = this.changeInput.bind(this)
        }*/

    /*changeState(){
            this.setState({
                name:"Talita Santos"
            })
        }

        resetState(){
            this.setState({
                name:"Talita"
            })
        }

        changeInput(event){
            let target = event.target
            let index = target.name
            this.setState({
                [index]:target.value
            })
        }*/

    render() {
        return (
            <div>
                <div className="App">
                    <Link to="/">Home</Link>
                    <Link to="/user">User</Link>
                    {/*<header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Meu projeto em React
                      <Talita></Talita>
                  </p>
                </header>*/
                        /*<div>
                            <form>
                                <label>Nome
                                    <input type="text" name="name" value={this.state.name} onChange={this.changeInput}></input>
                                </label>
                                <label>E-mail
                                    <input type="email" name="email" value={this.state.email} onChange={this.changeInput}></input>
                                </label>
                            </form>
                            {this.state.name} - {this.state.email}
                        </div>
                        <button onClick={this.changeState}>Mudar estado</button>
                        <button onClick={this.resetState}>Reset estado</button>
                        <List></List>*/}
                </div>
                {routesConfig.map((value, key) => {
                    return <Route
                        key={key}
                        path={value.path}
                        component={value.component}
                        exact={value.exact}
                    ></Route>
                })}
            </div>
        );
    }
}

export default App;
