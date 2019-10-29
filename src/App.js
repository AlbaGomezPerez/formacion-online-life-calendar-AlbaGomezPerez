import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SmileyList from "./components/SmileyList";
import Form from "./components/Form";
import './App.css';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            smilesList: ['hola'],
        };
    }
    componentDidMount() {
        // TODO obtener del localstorage lo guardado
        // this.functionLocal();
    }

    // GUARDAR DATOS
    // localStorage.setItem("Nombre", JSON.stringify(nombre));
    // showFavourites();

    // RECOGER DATOS
    // let nombre = localStorage.getItem("Nombre");

    render() {
        const {smilesList} = this.state;
        return (
            <div className="App">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={routerProps => (
                            <SmileyList/>
                        )}
                    />
                    <Route
                        path="/create/"
                        render={routerProps => (
                            <Form
                            smilesList={smilesList}
                            />
                        )}
                    />
                </Switch>


            </div>
        );
    }
}

export default App;
