import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
import './../styles/smileyList.css';

const SmileyList = props => {
    let {smileyList} = props;

    return (
        <div>
            <Link className="addSmiley" to={'/create/'}>
                +
            </Link>
            <ul className="smileyList">
                 <li>{smileyList}</li>
                <li>pintar listado del estado</li>
            </ul>
        </div>
    );
};

export default SmileyList;
