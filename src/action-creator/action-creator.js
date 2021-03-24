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

    setIsFacultySelectFirst: (isFacultySelectFirst, facultyUrlFirst) => ({
        type: `SET_IS_FACULTY_SELECT_FIRST`,
        payload: { isFacultySelectFirst, facultyUrlFirst }
    }),

    setIsEducationSelectFirst: (isEducationSelectFirst, educationUrlFirst) => ({
        type: `SET_IS_EDUCATION_SELECT_FIRST`,
        payload: { isEducationSelectFirst, educationUrlFirst }
    }),

    setIsCourseSelectFirst: (isCourseSelectFirst, courseUrlFirst) => ({
        type: `SET_IS_COURSE_SELECT_FIRST`,
        payload: { isCourseSelectFirst, courseUrlFirst }
    }),

    setIsGroupSelectFirst: (isGroupSelectFirst, groupUrlFirst) => ({
        type: `SET_IS_GROUP_SELECT_FIRST`,
        payload: { isGroupSelectFirst, groupUrlFirst }
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

    setIsFacultySelectSecond: (isFacultySelectSecond, facultyUrlSecond) => ({
        type: `SET_IS_FACULTY_SELECT_SECOND`,
        payload: { isFacultySelectSecond, facultyUrlSecond }
    }),

    setIsEducationSelectSecond: (isEducationSelectSecond, educationUrlSecond) => ({
        type: `SET_IS_EDUCATION_SELECT_SECOND`,
        payload: { isEducationSelectSecond, educationUrlSecond }
    }),

    setIsCourseSelectSecond: (isCourseSelectSecond, courseUrlSecond) => ({
        type: `SET_IS_COURSE_SELECT_SECOND`,
        payload: { isCourseSelectSecond, courseUrlSecond }
    }),

    setIsGroupSelectSecond: (isGroupSelectSecond, groupUrlSecond) => ({
        type: `SET_IS_GROUP_SELECT_SECOND`,
        payload: { isGroupSelectSecond, groupUrlSecond }
    }),

    setModalOpen: (isModalOpen) => ({
        type: `SET_MODAL_OPEN`,
        payload: isModalOpen
    }),

    resetValues: () => ({
        type: `RESET_VALUES`
    }),
}