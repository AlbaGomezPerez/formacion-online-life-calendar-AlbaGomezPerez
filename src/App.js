import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SmileyList from "./components/SmileyList";
import Form from "./components/Form";
import './App.css';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            smiliesList: [],
        };
    }
    componentDidMount() {
        //TODO obtener del localstorage lo guardado
    }

    render(){
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
                            <Form/>
                        )}
                    />
                </Switch>


            </div>
        );
    }
}

export default App;
