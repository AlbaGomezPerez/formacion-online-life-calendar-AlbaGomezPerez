import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SmileyList from "./components/SmileyList";
import Smilies from "./components/Smilies";
import Form from "./components/Form";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            smilesList: [],
            startDate: new Date(),
            happyStatus: null,
            reasonToBeHappy: ''
        };
        this.setCalendarValue = this.setCalendarValue.bind(this);
        this.setSmileyValue = this.setSmileyValue.bind(this);
        this.setReasonToBeHappyValue = this.setReasonToBeHappyValue.bind(this);
        this.setSmileyForm = this.setSmileyForm.bind(this);
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

    setSmileyValue(changeEvent){
        const happyStatus = changeEvent.target.value === 'happy';
        this.setState({
            happyStatus: happyStatus
        });
        const reasonSmiley = document.querySelector('.reasonSmiley');
        if (happyStatus) {
            reasonSmiley.classList.remove('hidden');
        } else {
            reasonSmiley.classList.add('hidden');
        }
    }

    setReasonToBeHappyValue(changeEvent) {
        this.setState({
            reasonToBeHappy: changeEvent.target.value
        });
    }

    setCalendarValue(date){
        this.setState({
            startDate: date
        });
    }


    setSmileyForm(){
        const formData = {
            date: this.state.startDate,
            happyStatus: this.state.happyStatus,
            reason: this.state.reasonToBeHappy
        };
        //add object formData
        this.setState(previousState => ({
            smilesList: [...previousState.smilesList, formData]
        }));
        console.log("Estado antes de guardar en LS:" + this.state.smilesList);

        // recojo los datos del local
        // si está vacío, entonces me guardas el array con el objeto
        // si no está vacío, agrego los datos a la variable del local
        let usersDataString = localStorage.getItem("usersData");
        if(usersDataString === '' || usersDataString === null || usersDataString === undefined){
            let usersDataList = [formData];
            usersDataString = JSON.stringify(usersDataList);
        }else{
            let usersDataParsed = JSON.parse(usersDataString);
            usersDataParsed.push(formData);
            usersDataString = JSON.stringify(usersDataParsed);
        }
        localStorage.setItem("usersData", usersDataString);
    }




    render() {
        const {smilesList, startDate, happyStatus} = this.state;
        console.log('smilesList' + smilesList);
        return (
            <div className="App">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={routerProps => (
                            <Smilies
                                smilesList={smilesList}
                                happyStatus={happyStatus}
                            />
                        )}
                    />
                    <Route
                        path="/create/"
                        render={routerProps => (
                            <Form
                                startDate={startDate}
                                happyStatus={happyStatus}
                                setCalendarValue={this.setCalendarValue}
                                setSmileyValue={this.setSmileyValue}
                                setReasonToBeHappyValue={this.setReasonToBeHappyValue}
                                setSmileyForm={this.setSmileyForm}
                            />
                        )}
                    />
                </Switch>


            </div>
        );
    }
}

export default App;
