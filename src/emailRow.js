import React from 'react';
import './emailRow.css';
import { Checkbox, IconButton } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router';

function EmailRow({ id, title, subject, description, time }) {
    
    const history = useHistory();
    return (
        <div onClick={() => history.push("/mail")} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined/>
                </IconButton>
            </div>
            <div className="emailRow__title">
                <h3>{title}</h3>
            </div>
            <div className="emailRow__message">
                <p>{subject}</p> 
            </div>
            <div className="emailRow__description">
                <h2>{description}</h2>
            </div>
            <div className="emailRow__time">
                <h2>{time}</h2>
            </div>

        </div>
    )
}

export default EmailRow

