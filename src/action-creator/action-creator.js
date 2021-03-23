import { getDataDepartments } from "../service"

export const ActionCreator = {
    getDataDepartments: () => (dispatch) => {
        getDataDepartments().then((data) => {
            dispatch({
                type: `GET_DATA_DEPARTMENTS`,
                payload: data,
            });
        });
    },

    setModalOpen: (isModalOpen) => ({
        type: `SET_MODAL_OPEN`,
        payload: isModalOpen
    }),
}