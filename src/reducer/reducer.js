const initialState = {
    dataDepartments: [],
    isModalOpen: false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `GET_DATA_DEPARTMENTS`:
            return {
                ...state,
                dataDepartments: action.payload
            }
        case `SET_MODAL_OPEN`:
            return {
                ...state,
                isModalOpen: action.payload
            }
        default:
            return state;
    }
}