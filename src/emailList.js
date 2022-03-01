import { Checkbox, IconButton } from '@material-ui/core';
import { ArrowDropDown, ChevronLeft, ChevronRight, Duo, Inbox, KeyboardHide, LocalOffer, MoreVert, Note, Redo, Settings } from '@material-ui/icons';
import React from 'react';
import './emailList.css';
import EmailRow from './emailRow';
import Section from './section';

function EmailList() {
    return (
        <div className='emailList'>
            <div className='emailList__settings'>
                <div className='emailList__settingsLeft'>
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>    
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>
            <div className='emailList__sections'>
                <Section Icon={Inbox} title='Primary' color='red' selected={true}/>
                <Section Icon={Duo} title='Social' color='blue' selected={false}/>
                <Section Icon={LocalOffer} title='Promotions' color='green' selected={false}/>
            </div>

            <div className="emailList__list">
                <EmailRow
                    title="Tesla"
                    subject="Equity Deposit in BTC delivered to your cryptowallet!"
                    description=""
                    time="12:34AM"
                />      
                <EmailRow
                    title="Amazon"
                    subject="Meeting with Shareholders at Four Seasons Hotel 5:00PM, Entertainment provided."
                    description=""
                    time="3:33AM"
                />      
                <EmailRow
                    title="Apple"
                    subject="Macbook Pro 15' Retina Display: Delivered to your Malibu, CA residence at 4:00PM"
                    description=""
                    time="2:22AM"
                />      
                <EmailRow
                    title="Charm"
                    subject="Share prices are currently skyrocketing in the stock market!"
                    description=""
                    time="7:77AM"
                />      
                <EmailRow
                    title="Asus"
                    subject="Equity Deposit in BTC delivered to your cryptowallet!"
                    description=""
                    time="12:34AM"
                />      
                <EmailRow
                    title="Dell"
                    subject="Meeting with Shareholders at Four Seasons Hotel 5:00PM, Entertainment provided."
                    description=""
                    time="3:33AM"
                />      
                <EmailRow
                    title="IBM"
                    subject="Macbook Pro 15' Retina Display: Delivered to your Malibu, CA residence at 4:00PM"
                    description=""
                    time="2:22AM"
                />      
                <EmailRow
                    title="Charm"
                    subject="Share prices are currently skyrocketing in the stock market!"
                    description=""
                    time="7:77AM"
                />
                <EmailRow
                    title="Sony"
                    subject="Equity Deposit in BTC delivered to your cryptowallet!"
                    description=""
                    time="12:34AM"
                />      
                <EmailRow
                    title="Dell"
                    subject="Meeting with Shareholders at Four Seasons Hotel 5:00PM, Entertainment provided."
                    description=""
                    time="3:33AM"
                />      
                <EmailRow
                    title="IBM"
                    subject="Macbook Pro 15' Retina Display: Delivered to your Malibu, CA residence at 4:00PM"
                    description=""
                    time="2:22AM"
                />      
                <EmailRow
                    title="Charm"
                    subject="Share prices are currently skyrocketing in the stock market!"
                    description=""
                    time="7:77AM"
                />
                <EmailRow
                    title="Tesla"
                    subject="Equity Deposit in BTC delivered to your cryptowallet!"
                    description=""
                    time="12:34AM"
                />      
                <EmailRow
                    title="Amazon"
                    subject="Meeting with Shareholders at Four Seasons Hotel 5:00PM, Entertainment provided."
                    description=""
                    time="3:33AM"
                />     
                <EmailRow
                    title="Charm"
                    subject="Share prices are currently skyrocketing in the stock market!"
                    description=""
                    time="7:77AM"
                />      
            </div>
        </div>
    )
}

export default EmailList;
