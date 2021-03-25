import { getDataDepartments, getDataGroups, getDataSchedule } from "../service"

export const ActionCreator = {
    getDataDepartments: () => (dispatch) => {
        getDataDepartments().then((data) => {
            dispatch({
                type: `GET_DATA_DEPARTMENTS`,
                payload: data,
            });
        });
    },

    getDataGroupsFirst: (facultyUrlFirst, educationUrlFirst, courseUrlFirst) => (dispatch) => {
        getDataGroups(facultyUrlFirst, educationUrlFirst, courseUrlFirst).then((data) => {
            dispatch({
                type: `GET_DATA_GROUPS_FIRST`,
                payload: data,
            });
        });
    },

    getDataScheduleFirst: (facultyUrlFirst, groupUrlFirst) => (dispatch) => {
        getDataSchedule(facultyUrlFirst, groupUrlFirst).then((data) => {
            dispatch({
                type: `GET_DATA_SCHEDULE_FIRST`,
                payload: data,
            })
        })
    },

    setIsFacultySelectFirst: (isFacultySelectFirst, facultyUrlFirst, facultyHeaderFirst) => ({
        type: `SET_IS_FACULTY_SELECT_FIRST`,
        payload: { isFacultySelectFirst, facultyUrlFirst, facultyHeaderFirst }
    }),

    setIsEducationSelectFirst: (isEducationSelectFirst, educationUrlFirst, educationHeaderFirst) => ({
        type: `SET_IS_EDUCATION_SELECT_FIRST`,
        payload: { isEducationSelectFirst, educationUrlFirst, educationHeaderFirst }
    }),

    setIsCourseSelectFirst: (isCourseSelectFirst, courseUrlFirst, courseHeaderFirst) => ({
        type: `SET_IS_COURSE_SELECT_FIRST`,
        payload: { isCourseSelectFirst, courseUrlFirst, courseHeaderFirst }
    }),

    setIsGroupSelectFirst: (isGroupSelectFirst, groupUrlFirst, groupHeaderFirst) => ({
        type: `SET_IS_GROUP_SELECT_FIRST`,
        payload: { isGroupSelectFirst, groupUrlFirst, groupHeaderFirst }
    }),

    getDataGroupsSecond: (facultyUrlSecond, educationUrlSecond, courseUrlSecond) => (dispatch) => {
        getDataGroups(facultyUrlSecond, educationUrlSecond, courseUrlSecond).then((data) => {
            dispatch({
                type: `GET_DATA_GROUPS_SECOND`,
                payload: data,
            });
        });
    },

    getDataScheduleSecond: (facultyUrlSecond, groupUrlSecond) => (dispatch) => {
        getDataSchedule(facultyUrlSecond, groupUrlSecond).then((data) => {
            dispatch({
                type: `GET_DATA_SCHEDULE_SECOND`,
                payload: data,
            })
        })
    },

    setIsFacultySelectSecond: (isFacultySelectSecond, facultyUrlSecond, facultyHeaderSecond) => ({
        type: `SET_IS_FACULTY_SELECT_SECOND`,
        payload: { isFacultySelectSecond, facultyUrlSecond, facultyHeaderSecond }
    }),

    setIsEducationSelectSecond: (isEducationSelectSecond, educationUrlSecond, educationHeaderSecond) => ({
        type: `SET_IS_EDUCATION_SELECT_SECOND`,
        payload: { isEducationSelectSecond, educationUrlSecond, educationHeaderSecond }
    }),

    setIsCourseSelectSecond: (isCourseSelectSecond, courseUrlSecond, courseHeaderSecond) => ({
        type: `SET_IS_COURSE_SELECT_SECOND`,
        payload: { isCourseSelectSecond, courseUrlSecond, courseHeaderSecond }
    }),

    setIsGroupSelectSecond: (isGroupSelectSecond, groupUrlSecond, groupHeaderSecond) => ({
        type: `SET_IS_GROUP_SELECT_SECOND`,
        payload: { isGroupSelectSecond, groupUrlSecond, groupHeaderSecond }
    }),

    setModalOpen: (isModalOpen) => ({
        type: `SET_MODAL_OPEN`,
        payload: isModalOpen
    }),

    resetValues: () => ({
        type: `RESET_VALUES`
    }),
}