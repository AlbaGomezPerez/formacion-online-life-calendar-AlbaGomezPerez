import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SmileyList from "./components/SmileyList";
import Form from "./components/Form";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            smilesList: [],
            startDate: new Date()
        };
        this.setCalendarValue = this.setCalendarValue.bind(this);
    }
    componentDidMount() {
       let usersDataString = localStorage.getItem("usersData");
        if(usersDataString !== undefined && usersDataString !== null){
            let usersDataParsed = JSON.parse(usersDataString);

            this.setState({
                smilesList: usersDataParsed
            })
        }
    }

    setCalendarValue(date){
        this.setState({
            startDate: date
        });
    }

    render() {
        const {smilesList, startDate} = this.state;
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
                            startDate={startDate}
                            setCalendarValue={this.setCalendarValue}
                            />
                        )}
                    />
                </Switch>


            </div>
        );
    }
}

export default App;
