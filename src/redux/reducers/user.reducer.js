const initialState = {
    user: null,
    token: false
}

export default ((state = initialState, { type, payload }) => {
    switch(type) {
        default:
            return { ...state }
    }
});