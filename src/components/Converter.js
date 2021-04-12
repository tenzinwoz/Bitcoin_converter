import React, { Fragment, useState, useEffect } from 'react';
import {
    Typography,
    Select,
    MenuItem,
    Box,
    makeStyles
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setCountry } from '../redux/actions/BitCoinAction';

const useStyles = makeStyles((theme) => ({
    labelText: {
        fontSize: '20px',
        color: theme.palette.grey[700],
        fontWeight: '500',
        marginBottom: theme.spacing(2)
    },
    innerBox: {
        heigh: '100%',
        diplay: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

export default function Converter({ curType, setCurType }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { singleBitCoinData } = useSelector((state) => state.BitCoinReducer)

    const handleChange = (e) => {
        const curName = e.target.value;
        setCurType(curName);
        dispatch(setCountry(curName))
    }
    useEffect(() => {
        dispatch(setCountry(curType))
    }, [curType]);


    return (
        <Box className={classes.innerBox}>
            <Box>
                <form>
                    <Typography className={classes.labelText}>1 Bitcoin Equals</Typography>
                    <Select
                        fullWidth
                        variant="outlined"
                        color="primary"
                        margin="normal"
                        onChange={(e) => handleChange(e)}
                        value={curType}
                        name="curType"
                    >
                        <MenuItem value={"USD"}>United States Dollar</MenuItem>
                        <MenuItem value={"GBP"}>British Pound Sterling</MenuItem>
                        <MenuItem value={"EUR"}>Euro</MenuItem>
                    </Select>
                </form>
                <Box mt={3}>
                    <Typography variant="h1">
                        {singleBitCoinData.rate_float}  {singleBitCoinData.description}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
