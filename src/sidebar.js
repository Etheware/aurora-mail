import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import './sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './sidebarOption';
import { AccessTime, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className='sidebar'>
            <Button 
                startIcon={<AddIcon fontSize='large' />} 
                className='sidebar__compose'
            >
                Compose
            </Button>
            <SidebarOption 
                Icon={Inbox} 
                title='Inbox' 
                number={24}
                selected={false}
            />
            <SidebarOption 
                Icon={Star} 
                title='Starred' 
                number={5}
                selected={false}
            />
            <SidebarOption 
                Icon={AccessTime} 
                title='Snoozed' 
                number={283}
                selected={false}
            />
            <SidebarOption 
                Icon={LabelImportant} 
                title='Important' 
                number={89}
                selected={false}
            />
            <SidebarOption 
                Icon={NearMe} 
                title='Sent' 
                number={25}
                selected={false}
            />
            <SidebarOption 
                Icon={Note} 
                title='Drafts' 
                number={2}
                selected={false}
            />
            <SidebarOption 
                Icon={ExpandMore} 
                title='More' 
                number={56}
                selected={false}
            />

            <div className='sidebar__footer'>
                <div className='sidebar__footericons'>
                    <IconButton>
                        <Person />
                    </IconButton>
                    <IconButton>
                        <Duo />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
