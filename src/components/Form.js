import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";


const Form = props => {

    let date = new Date();
    let happyStatus;
    let reasonToBeHappy;

    function setSmileyForm(){
        console.log('Fecha: ' + date);
        console.log('Feliz: ' + happyStatus);
        console.log('Razon: ' + reasonToBeHappy);
        // this.setState({
        //     SearchName: SearchName
        // });
        //TODO crear objeto y guardarlo en el estado y en el localstorage
    }

    function setSmileyValue(changeEvent){
        happyStatus = changeEvent.target.value === 'happy';
    }

    function setCalendarValue(changeEvent){
        date = changeEvent;
        console.log(date);
    }

    function setReasonToBeHappyValue(changeEvent) {
        reasonToBeHappy = changeEvent.target.value;
    }

    return (
        <div>
            <DatePicker selected={date}
                        onChange={date => setCalendarValue(date)}
                        dateFormat="dd/MM/yyyy"
            />

            <input type="radio" value="happy" onChange={setSmileyValue}/>
            :)
            <input type="radio" value="sad" onChange={setSmileyValue}/>
            :(
            <br/>
            ¿Por qué estoy content@?
            <input type="text" onChange={setReasonToBeHappyValue}/>
            <Link className="saveSmiley" to={"/"} onClick={setSmileyForm}>
                Guardar
            </Link>
            <Link className="cancelSmiley" to={"/"}>
                Cancelar
            </Link>
        </div>
    );
};

export default Form;

