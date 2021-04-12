import axios from 'axios';
import moment from 'moment';
const todaysDate = moment().format('YYYY-MM-DD');

export const setCountry = (name) => (dispatch) => {

    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(function (res) {
            const { data: { bpi } } = res;
            for (let index in bpi) {
                if (name == index) {
                    dispatch({
                        type: "SET_BIT_VALUE",
                        payload: bpi[index]
                    })

                }
            }
        })
        .catch(function (err) {
            console.log(err);
        })
}

export const setHistoryGraph = (name) => (dispatch) => {

    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${name}&start=2021-04-02&end=${todaysDate}`)
        .then(function (res) {
            const { data: { bpi } } = res;
            dispatch({
                type: "SET_HISTORY_DATA",
                payload: bpi
            })
        })
        .catch(function (err) {
            console.log(err);
        })
}