import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';


const SmileyList = props => {

return (
        <React.Fragment>
            <Link className="addSmiley" to={"/create/"}>
                +
            </Link>
            <ul className="smileyList">
                <li>TODO pintar listado del estado</li>
            </ul>
        </React.Fragment>
    );
};

export default SmileyList;
