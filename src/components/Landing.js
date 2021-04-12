import React, { useState } from 'react'
import Converter from './Converter';
import {
    Grid,
    Container,
    makeStyles
} from '@material-ui/core';
import Graph from './Graph';

const useStyles = makeStyles((theme) => ({
    landingRoot: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
    }
}))

export default function Landing() {
    const classes = useStyles();
    const [curType, setCurType] = useState("USD");
    return (
        <div className={classes.landingRoot}>
            <Container >
                <Grid container spacing={2}>
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                        <Converter setCurType={setCurType} curType={curType} />
                    </Grid>
                    <Grid item lg={7} md={7} sm={12} xs={12}>
                        <Graph curType={curType} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
