import React from "react";
import {Link} from "react-router-dom";
import './../styles/smileyList.css';


const Smilies = props => {
    let {smilesList} = props;

    console.log(smilesList);

    return (
        <div>
            <Link className="addSmiley" to={'/create/'}>
                <div className="createSmiley">{'+'}</div>
            </Link>
            <ul className="smileyList">
                {smilesList
                    .map((face, index) => {
                        return (
                            <li className={face.happyStatus ? 'happySmile' : 'sadSmile'} key={index} >
                                {face.happyStatus ? ':)' : ':('}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default Smilies;

