import React from "react";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './../styles/form.css';


const Form = props => {
    let {startDate, setCalendarValue, happyStatus, setSmileyValue, setReasonToBeHappyValue, setSmileyForm} = props;

    return (
        <div>
            <DatePicker selected={startDate}
                        onChange={date => setCalendarValue(date)}
                        dateFormat="dd/MM/yyyy"
            />

            <input className="selectFace" type="radio" value="happy" onChange={setSmileyValue} checked={happyStatus === true}/>
                :)
            <input className="selectFace" type="radio" value="sad" onChange={setSmileyValue} checked={happyStatus === false}/>
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

