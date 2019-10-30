import React from "react";
import {Link} from "react-router-dom";
import './../styles/smileyList.css';


const Smilies = props => {
    let {smilesList} = props;


    return (
        <div>
            <Link className="addSmiley" to={'/create/'}>
                <div className="createSmiley">{'+'}</div>
            </Link>
            <ul className="smileyList">
                <li className="happySmile">:)</li>
                <li className="sadSmile">:(</li>
                <li className="happySmile">:)</li>
                <li className="sadSmile">:(</li>
                <li className="happySmile">:)</li>
                <li className="sadSmile">:(</li>
                <li className="happySmile">:)</li>
                <li className="sadSmile">:(</li>
                <li className="happySmile">:)</li>
                <li className="sadSmile">:(</li>
            </ul>
        </div>
    );
};

export default Smilies;

