import { Card } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Chart from './Chart';
import './Home.css';
import InfoBox from './InfoBox';
import NewMember from './NewMember';
import Table from './Table';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AssessmentIcon from '@material-ui/icons/Assessment';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import { userData } from '../../dummydata';
import db from '../../firebase';

const Home = () => {
    const [members, setMember] = useState([]);

    useEffect(() => {
        db.collection("Team").onSnapshot(snapshot => (
            setMember(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))
    }, [])

    return (
        <div className="home">
            <Card className="home__infobox">
                <InfoBox title="32,451" reason="Visits" value="+14.00(+0.50%)
            " Icons={TrendingFlatIcon} />
                <InfoBox title="15,236" reason="Impressions" value="+138.97(+0.54%)"
                    Icons={TrendingUpIcon} />
                <InfoBox title="7,688" reason="Conversion" value="+57.62(+0.76%)
            " Icons={AssessmentIcon} />
                <InfoBox title="1,553" reason="Downloads" value="+138.97(+0.54%)
            " Icons={EqualizerIcon} />
                <InfoBox title="32,451" reason="Visits" value="+14.00(+0.50%)
            " Icons={DonutLargeIcon} />
            </Card>
            <Chart data={userData} title="User Analytics" grid dataKey="Successful delivery" />
            <div className="homewidgetsWrapper">
                <Card className="home__newmember">
                    <h3 style={{ color: "gray", marginBottom: "1rem", marginLeft: "0.5rem", fontWeight: "bold" }}>New Member</h3>
                    {members.map(member => (
                        <NewMember name={member.data.fullName} position={member.data.position} />
                    ))}
                </Card>
                <Card className="home__table">
                    <Table />
                </Card>
            </div>
        </div>
    )
}

export default Home;
