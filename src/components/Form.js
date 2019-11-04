import React from "react";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './../styles/form.css';


const Form = props => {
    let {startDate, setCalendarValue, happyStatus, setSmileyValue, setReasonToBeHappyValue, setSmileyForm} = props;

    return (
        <div className="formContainer">
            <p className="dateText">Date</p>
            <div className="calendarContainer">
                <DatePicker className="calendar" selected={startDate}
                             onChange={date => setCalendarValue(date)}
                             dateFormat="dd/MM/yyyy"
                />
            </div>

            <p className="stateText">How are you?</p>
            <div className="faceContainer">
                <input className="selectFace" type="radio" value="happy" onChange={setSmileyValue} checked={happyStatus === true}/>
                :)
                <input className="selectFace" type="radio" value="sad" onChange={setSmileyValue} checked={happyStatus === false}/>
                :(
            </div>
            <div className="reasonContainer">
                <input className="reasonSmiley hidden" type="text" placeholder="I feel happy because..."
                       onChange={setReasonToBeHappyValue}/>
            </div>
            <div className="saveContainer">
                <Link className="saveSmiley" to={"/"} onClick={setSmileyForm}>
                    Save
                </Link>
                <Link className="cancelSmiley" to={"/"}>
                    Cancel
                </Link>
            </div>

        </div>
    );
};

export default Form;

