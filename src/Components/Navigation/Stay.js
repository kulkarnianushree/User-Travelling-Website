import React from "react";
import { NavLink } from "react-router-dom";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import './Stay.css'; // Import the CSS file

const Stay = ({ onClose }) => {
    return (
        <div className="stay-modal">
            <div className="stay-content">
                <nav>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                    <ul>
                        <li>
                            <NavLink to='/Villas'>Villas</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Appartment'>Appartment</NavLink>
                        </li>
                        <li>
                            <NavLink to='/HouseBoat'>HouseBoat</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Farmhouse'>FarmHouse</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Spa'>Spa</NavLink>
                        </li>
                        <li>
                            <NavLink to='/List'></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Stay;
