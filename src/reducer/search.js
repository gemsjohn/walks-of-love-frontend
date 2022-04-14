const searchReducer = (state = false, action) => {
    switch (action.type) {
        case 'SEARCH':
            return !state;
        default:
            return state;
    }
};

export default searchReducer;