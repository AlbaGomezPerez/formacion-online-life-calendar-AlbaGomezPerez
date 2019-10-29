import React from "react";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import Collapsible from 'react-collapsible';
import "react-datepicker/dist/react-datepicker.css";
import './../styles/form.css';


const Form = props => {
    const {smilesList, startDate} = props;
    console.log(smilesList);

    let date = new Date();
    let happyStatus;
    let reasonToBeHappy;

    function setSmileyForm(){
        console.log('Fecha: ' + date);
        console.log('Feliz: ' + happyStatus);
        console.log('Razon: ' + reasonToBeHappy);
        let formData = {
            date: date,
            happyStatus: happyStatus,
            reason: reasonToBeHappy
        };

        //add object formData
        smilesList.push(formData);
        localStorage.setItem("usersData", JSON.stringify(smilesList));
    }

    function setSmileyValue(changeEvent){
        happyStatus = changeEvent.target.value === 'happy';
        // openReasonInput()
    }

    function setCalendarValue(changeEvent){
        date = changeEvent;
        console.log(date);
    }

    function setReasonToBeHappyValue(changeEvent) {
        reasonToBeHappy = changeEvent.target.value;
    }

    // COLLAPSIBLE FUNCTION
    // function openReasonInput() {
    //     if (selectFace.value.contains('happy')) {
    //         reasonSmiley.classList.remove('hidden');
    //     } else {
    //         reasonSmiley.classList.add('hidden');
    //     }
    // }

    return (
        <div>
            <DatePicker selected={date}
                        onChange={date => setCalendarValue(date)}
                        dateFormat="dd/MM/yyyy"
            />

            <input className="selectFace" type="radio" value="happy" onChange={setSmileyValue} />
                :)
            <Collapsible triggerTagName="input">
                <input className="reasonSmiley" type="text" placeholder="Estoy contento porque..." onChange={setReasonToBeHappyValue}/>
            </Collapsible>
            <input className="selectFace" type="radio" value="sad" onChange={setSmileyValue} />
            :(
            <br/>
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

