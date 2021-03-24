const initialState = {
    dataDepartments: [],
    dataGroupsFirst: [],
    dataScheduleFirst: [],
    dataGroupsSecond: [],
    dataScheduleSecond: [],
    isModalOpen: false,
    isFacultySelectFirst: false,
    isEducationSelectFirst: false,
    isCourseSelectFirst: false,
    isGroupSelectFirst: false,
    facultyUrlFirst: null,
    educationUrlFirst: null,
    courseUrlFirst: null,
    groupUrlFirst: null,
    isFacultySelectSecond: false,
    isEducationSelectSecond: false,
    isCourseSelectSecond: false,
    isGroupSelectSecond: false,
    facultyUrlSecond: null,
    educationUrlSecond: null,
    courseUrlSecond: null,
    groupUrlSecond: null,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `GET_DATA_DEPARTMENTS`:
            return {
                ...state,
                dataDepartments: action.payload
            }
        case `GET_DATA_GROUPS_FIRST`:
            return {
                ...state,
                dataGroupsFirst: action.payload
            }
        case `GET_DATA_SCHEDULE_FIRST`:
            return {
                ...state,
                dataScheduleFirst: action.payload
            }
        case `SET_IS_FACULTY_SELECT_FIRST`:
            return {
                ...state,
                isFacultySelectFirst: action.payload.isFacultySelectFirst,
                facultyUrlFirst: action.payload.facultyUrlFirst
            }
        case `SET_IS_EDUCATION_SELECT_FIRST`:
            return {
                ...state,
                isEducationSelectFirst: action.payload.isEducationSelectFirst,
                educationUrlFirst: action.payload.educationUrlFirst
            }
        case `SET_IS_COURSE_SELECT_FIRST`:
            return {
                ...state,
                isCourseSelectFirst: action.payload.isCourseSelectFirst,
                courseUrlFirst: action.payload.courseUrlFirst
            }
        case `SET_IS_GROUP_SELECT_FIRST`:
            return {
                ...state,
                isGroupSelectFirst: action.payload.isGroupSelectFirst,
                groupUrlFirst: action.payload.groupUrlFirst
            }
        case `GET_DATA_GROUPS_SECOND`:
            return {
                ...state,
                dataGroupsSecond: action.payload
            }
        case `GET_DATA_SCHEDULE_SECOND`:
            return {
                ...state,
                dataScheduleSecond: action.payload
            }
        case `SET_IS_FACULTY_SELECT_SECOND`:
            return {
                ...state,
                isFacultySelectSecond: action.payload.isFacultySelectSecond,
                facultyUrlSecond: action.payload.facultyUrlSecond
            }
        case `SET_IS_EDUCATION_SELECT_SECOND`:
            return {
                ...state,
                isEducationSelectSecond: action.payload.isEducationSelectSecond,
                educationUrlSecond: action.payload.educationUrlSecond
            }
        case `SET_IS_COURSE_SELECT_SECOND`:
            return {
                ...state,
                isCourseSelectSecond: action.payload.isCourseSelectSecond,
                courseUrlSecond: action.payload.courseUrlSecond
            }
        case `SET_IS_GROUP_SELECT_SECOND`:
            return {
                ...state,
                isGroupSelectSecond: action.payload.isGroupSelectSecond,
                groupUrlSecond: action.payload.groupUrlSecond
            }
        case `SET_MODAL_OPEN`:
            return {
                ...state,
                isModalOpen: action.payload,
                
            }
        case `RESET_VALUES`:
            return {
                ...state,
                isFacultySelectFirst: false,
                isEducationSelectFirst: false,
                isCourseSelectFirst: false,
                isGroupSelectFirst: false,
                facultyUrlFirst: null,
                educationUrlFirst: null,
                courseUrlFirst: null,
                groupUrlFirst: null,
                isFacultySelectSecond: false,
                isEducationSelectSecond: false,
                isCourseSelectSecond: false,
                isGroupSelectSecond: false,
                facultyUrlSecond: null,
                educationUrlSecond: null,
                courseUrlSecond: null,
                groupUrlSecond: null,
            }
        default:
            return state;
    }
}