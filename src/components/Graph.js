import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts';
import { useSelector, useDispatch } from 'react-redux';
import { setHistoryGraph } from '../redux/actions/BitCoinAction';
import moment from 'moment';
import {
    makeStyles, Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    chartHolder: {
        maxWidth: "500px",
        margin: '0 auto',
    }
}))


export default function Graph({ curType }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { bitCoinTwoMonths } = useSelector((state) => state.BitCoinReducer);
    const [yAxisData, setYaxisData] = useState([]);
    const [xAsisData, setXaisData] = useState([]);



    useEffect(() => {
        dispatch(setHistoryGraph(curType))
    }, [curType])

    useEffect(() => {
        const xArray = [];
        const yArray = [];
        for (let index in bitCoinTwoMonths) {
            const formatedDate = moment(index).format('D MMM');
            yArray.push(bitCoinTwoMonths[index]);
            xArray.push(formatedDate)
        }
        setXaisData(xArray);
        setYaxisData(yArray)
    }, [bitCoinTwoMonths]);

    const options = {
        labels: xAsisData,
        chart: {
            toolbar: {
                show: false
            }
        },
        colors: ['#34A953'],
        markers: {
            size: 4,
            colors: ["#fff"],
            strokeColors: "#34A953",
            strokeWidth: 2,
            hover: {
                size: 7
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: [1, 1, 1],
            dashArray: [0, 8, 5]
        },
    }
    const series = [
        {
            name: "Value",
            data: yAxisData,
        }
    ]
    return (
        <div className={classes.chartHolder}>
            <Chart
                options={options}
                series={series}
                type="area"
            />
        </div>
    )
}
