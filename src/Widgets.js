import React from 'react';
import "./Widgets.css"
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )
    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle(" Reactfor begginers", "Top news- 99099 readers")}
            {newsArticle(" Coronavirus: Ghana Updates", "Top news- 991 readers")}
            {newsArticle(" Tesla hits new high", "Cars & auto- 302 readers")}
            {newsArticle(" Bitcoin Breaks $22k", "Crypto- 20021 readers")}
            {newsArticle(" Is redux too good?", "code- 1.1m readers")}
            {newsArticle(" Papa react launches course?", "Top news- 6054 readers")}
            {newsArticle(" PHP for begginer", "code- 8956 readers")}
            {newsArticle(" AM a programmer i have no life", "Top news- 33.2m readers")}
        </div>
    );
}

export default Widgets;
