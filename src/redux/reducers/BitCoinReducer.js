const initialState = {
    singleBitCoinData: "",
    bitCoinTwoMonths: []
}

const CartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "SET_BIT_VALUE":
            return { ...state, singleBitCoinData: payload }
        case "SET_HISTORY_DATA":
            return { ...state, bitCoinTwoMonths: payload }
        default:
            return state
    }
}

export default CartReducer;