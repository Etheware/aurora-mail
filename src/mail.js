import { Icon, IconButton } from '@material-ui/core';
import { ArrowBack, Delete, Email, Error, ExitToApp, Forward, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@material-ui/icons';
import React, { useSTate } from 'react';
import { useHistory } from 'react-router';
import './mail.css';

function Mail() {
    const history = useHistory();
    return (
        <div className='mail'>
            <div className='mail__tools'>
                <div className='mail__toolsLeft'>
                    <IconButton onClick={() => history.push('/')}>
                        <ArrowBack/>
                    </IconButton>

                    <IconButton>
                        <MoveToInbox/>
                    </IconButton>

                    <IconButton>
                        <Error/>
                    </IconButton>

                    <IconButton>
                        <Delete/>
                    </IconButton>

                    <IconButton>
                        <Email/>
                    </IconButton>

                    <IconButton>
                        <WatchLater/>
                    </IconButton>
                </div>

                <div className='mail__toolsRight'>
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>
                    
                    <IconButton>
                        <Print />
                    </IconButton>

                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>
            </div>
            <div className='mail__body'>
                <div className='mail__bodyHeader'>
                    <h2>Subject</h2>
                    <LabelImportant
                    className='mail__important' />
                    <p>Title</p>
                    <p className='mail__time'>10PM</p>
                </div>

                <div className='mail__message'>This is a message </div> 
            </div>          
        </div>   
    )
}

export default Mail;
