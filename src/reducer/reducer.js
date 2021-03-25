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
    facultyHeaderFirst: null,
    educationHeaderFirst: null,
    courseHeaderFirst: null,
    groupHeaderFirst: null,
    isFacultySelectSecond: false,
    isEducationSelectSecond: false,
    isCourseSelectSecond: false,
    isGroupSelectSecond: false,
    facultyUrlSecond: null,
    educationUrlSecond: null,
    courseUrlSecond: null,
    groupUrlSecond: null,
    facultyHeaderSecond: null,
    educationHeaderSecond: null,
    courseHeaderSecond: null,
    groupHeaderSecond: null,
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
                facultyUrlFirst: action.payload.facultyUrlFirst,
                facultyHeaderFirst: action.payload.facultyHeaderFirst
            }
        case `SET_IS_EDUCATION_SELECT_FIRST`:
            return {
                ...state,
                isEducationSelectFirst: action.payload.isEducationSelectFirst,
                educationUrlFirst: action.payload.educationUrlFirst,
                educationHeaderFirst: action.payload.educationHeaderFirst
            }
        case `SET_IS_COURSE_SELECT_FIRST`:
            return {
                ...state,
                isCourseSelectFirst: action.payload.isCourseSelectFirst,
                courseUrlFirst: action.payload.courseUrlFirst,
                courseHeaderFirst: action.payload.courseHeaderFirst
            }
        case `SET_IS_GROUP_SELECT_FIRST`:
            return {
                ...state,
                isGroupSelectFirst: action.payload.isGroupSelectFirst,
                groupUrlFirst: action.payload.groupUrlFirst,
                groupHeaderFirst: action.payload.groupHeaderFirst
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
                facultyUrlSecond: action.payload.facultyUrlSecond,
                facultyHeaderSecond: action.payload.facultyHeaderSecond
            }
        case `SET_IS_EDUCATION_SELECT_SECOND`:
            return {
                ...state,
                isEducationSelectSecond: action.payload.isEducationSelectSecond,
                educationUrlSecond: action.payload.educationUrlSecond,
                educationHeaderSecond: action.payload.educationHeaderSecond
            }
        case `SET_IS_COURSE_SELECT_SECOND`:
            return {
                ...state,
                isCourseSelectSecond: action.payload.isCourseSelectSecond,
                courseUrlSecond: action.payload.courseUrlSecond,
                courseHeaderSecond: action.payload.courseHeaderSecond
            }
        case `SET_IS_GROUP_SELECT_SECOND`:
            return {
                ...state,
                isGroupSelectSecond: action.payload.isGroupSelectSecond,
                groupUrlSecond: action.payload.groupUrlSecond,
                groupHeaderSecond: action.payload.groupHeaderSecond
            }
        case `SET_MODAL_OPEN`:
            return {
                ...state,
                isModalOpen: action.payload,
                
            }
        case `RESET_VALUES`:
            return {
                ...state,
                dataGroupsFirst: [],
                dataGroupsSecond: [],
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