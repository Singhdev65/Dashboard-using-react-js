import { Card, CardContent, Typography} from '@material-ui/core';
import React from 'react';
import "./InfoBox.css";

const InfoBox = ({title, reason, value, Icons}) => {
    return (
        <Card className="infobox">
            <CardContent className="infobox__content">
                <div className="infobox__left">
                        <h3>{title}</h3>
                        <h5>{reason}</h5>
                        <Typography>{value}</Typography>
                </div>
                <div className="infobox__right">
                    <Icons className="infobox__rightIcons"/>
                </div>
            </CardContent>
        </Card>
    )
}

export default InfoBox;