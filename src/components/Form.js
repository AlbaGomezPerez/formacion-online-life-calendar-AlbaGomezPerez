import React from "react";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import ReactDOM from "react-dom";
import "react-datepicker/dist/react-datepicker.css";
import './../styles/form.css';


const Form = props => {
    let {smilesList, startDate, setCalendarValue} = props;

    let happyStatus;
    let reasonToBeHappy;

    function setSmileyForm(){
        const formData = {
            date: startDate,
            happyStatus: happyStatus,
            reason: reasonToBeHappy
        };
        //add object formData
        smilesList.push(formData);
        localStorage.setItem("usersData", JSON.stringify(smilesList));
    }

    function setSmileyValue(changeEvent){
        happyStatus = changeEvent.target.value === 'happy';
        openReasonInput()
    }

    function setReasonToBeHappyValue(changeEvent) {
        reasonToBeHappy = changeEvent.target.value;
    }

    function openReasonInput() {
        const reasonSmiley = document.querySelector('.reasonSmiley');
        if (happyStatus) {
            reasonSmiley.classList.remove('hidden');
        } else {
            reasonSmiley.classList.add('hidden');
        }
    }

    return (
        <div>
            <DatePicker selected={startDate}
                        onChange={date => setCalendarValue(date)}
                        dateFormat="dd/MM/yyyy"
            />

            <input className="selectFace" type="radio" value="happy" onChange={setSmileyValue} />
                :)
            <input className="selectFace" type="radio" value="sad" onChange={setSmileyValue} />
            :(
            <br/>
            <input className="reasonSmiley hidden" type="text" placeholder="Estoy contento porque..."
                   onChange={setReasonToBeHappyValue}/>
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

