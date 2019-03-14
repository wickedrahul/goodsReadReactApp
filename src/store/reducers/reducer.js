const initialState = {
    fetchedBooks:[]
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){

        case 'FIRE_SEARCH':
            newState.fetchedBooks = action.value;
            break;
    }
    return newState;
};

export default reducer;