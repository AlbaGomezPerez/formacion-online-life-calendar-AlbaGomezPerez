import React from "react";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './../styles/form.css';


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
        openReasonInput()
    }

    function setCalendarValue(changeEvent){
        date = changeEvent;
        console.log(date);
    }

    function setReasonToBeHappyValue(changeEvent) {
        reasonToBeHappy = changeEvent.target.value;
    }

    // COLLAPSIBLE FUNCTION
    function openReasonInput() {
        if (selectFace.value.contains('happy')) {
            reasonSmiley.classList.remove('hidden');
        } else {
            reasonSmiley.classList.add('hidden');
        }
    }

    return (
        <div>
            <DatePicker selected={date}
                        onChange={date => setCalendarValue(date)}
                        dateFormat="dd/MM/yyyy"
            />

            <input className="selectFace" type="radio" value="happy" onChange={setSmileyValue}/>
            :)
            <input className="selectFace" type="radio" value="sad" onChange={setSmileyValue}/>
            :(
            <br/>
            <input className="reasonSmiley hidden" type="text" placeholder="Estoy contento porque..." onChange={setReasonToBeHappyValue}/>
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

