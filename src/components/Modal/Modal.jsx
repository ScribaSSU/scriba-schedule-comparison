import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from '../../action-creator/action-creator';
import styles from './Modal.module.css';
import SelectItem from './SelectItem/SelectItem';
import { educationForms, courses } from '../../utils/utils';

const Modal = (
        {
            dataDepartments,
            dataGroupsFirst,
            dataGroupsSecond,
            isModalOpen,
            isFacultySelectFirst,
            isEducationSelectFirst,
            isCourseSelectFirst,
            isGroupSelectFirst,
            facultyUrlFirst,
            educationUrlFirst,
            courseUrlFirst,
            groupUrlFirst,
            isFacultySelectSecond,
            isEducationSelectSecond,
            isCourseSelectSecond,
            isGroupSelectSecond,
            facultyUrlSecond,
            educationUrlSecond,
            courseUrlSecond,
            groupUrlSecond,
            onFacultySelectChangeFirst,
            onEducationSelectChangeFirst,
            onCourseSelectChangeFirst,
            getDataGroupsFirst,
            getDataScheduleFirst,
            onGroupSelectChangeFirst,
            onFacultySelectChangeSecond,
            onEducationSelectChangeSecond,
            onCourseSelectChangeSecond,
            getDataGroupsSecond,
            getDataScheduleSecond,
            onGroupSelectChangeSecond,
            onCloseButtonClick,
            resetValues,
        }
    ) => {

    useEffect(() => {
        if (isFacultySelectFirst && isEducationSelectFirst && isCourseSelectFirst) {
            getDataGroupsFirst(facultyUrlFirst, educationUrlFirst, courseUrlFirst);
        }
    }, [courseUrlFirst, educationUrlFirst, facultyUrlFirst, isCourseSelectFirst, isEducationSelectFirst, isFacultySelectFirst, getDataGroupsFirst]);

    useEffect(() => {
        if (isFacultySelectSecond && isEducationSelectSecond && isCourseSelectSecond) {
            getDataGroupsSecond(facultyUrlSecond, educationUrlSecond, courseUrlSecond);
        }
    }, [courseUrlSecond, educationUrlSecond, facultyUrlSecond, isCourseSelectSecond, isEducationSelectSecond, isFacultySelectSecond, getDataGroupsSecond]);

    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modalTitle}>
                <h3>Settings</h3>
            </div>
            <div className={styles.modalMain}>
                <div className={styles.modalMainFirst}>
                    <SelectItem 
                        selectArray={dataDepartments} 
                        id="faculties" 
                        placeholder="Choose faculty"
                        onSelectChange={onFacultySelectChangeFirst}
                    />
                    <SelectItem 
                        selectArray={educationForms} 
                        id="educations" 
                        placeholder="Choose education"
                        onSelectChange={onEducationSelectChangeFirst}
                    />
                    <SelectItem 
                        selectArray={courses} 
                        id="courses" 
                        placeholder="Choose course"
                        onSelectChange={onCourseSelectChangeFirst}
                    />
                    {
                        dataGroupsFirst.length !== 0 ?
                        <SelectItem 
                            selectArray={dataGroupsFirst} 
                            id="groups" 
                            placeholder="Choose group"
                            onSelectChange={onGroupSelectChangeFirst}
                        /> : null
                    }
                </div>
                <div className={styles.modalMainSecond}>
                    <SelectItem
                        selectArray={dataDepartments}
                        id="faculties"
                        placeholder="Choose faculty"
                        onSelectChange={onFacultySelectChangeSecond}
                    />
                    <SelectItem
                        selectArray={educationForms}
                        id="educations"
                        placeholder="Choose education"
                        onSelectChange={onEducationSelectChangeSecond}
                    />
                    <SelectItem
                        selectArray={courses}
                        id="courses"
                        placeholder="Choose course"
                        onSelectChange={onCourseSelectChangeSecond}
                    />
                    {
                        dataGroupsSecond.length !== 0 ?
                            <SelectItem
                                selectArray={dataGroupsSecond}
                                id="groups"
                                placeholder="Choose group"
                                onSelectChange={onGroupSelectChangeSecond}
                            /> : null
                    }
                </div>
            </div>
            <div className={styles.modalBtnContainer}>
                <button 
                    className={styles.modalBtn} 
                    disabled={
                        isCourseSelectFirst && 
                        isEducationSelectFirst && 
                        isFacultySelectFirst &&
                        isGroupSelectFirst &&
                        isCourseSelectSecond && 
                        isEducationSelectSecond && 
                        isFacultySelectSecond &&
                        isGroupSelectSecond ? false : true
                    }
                    onClick={ () => {
                        getDataScheduleFirst(facultyUrlFirst, groupUrlFirst);
                        getDataScheduleSecond(facultyUrlSecond, groupUrlSecond);
                        onCloseButtonClick(!isModalOpen);
                        resetValues();
                    }}
                >
                    OK
                </button>
                <button 
                    className={styles.modalBtn} 
                    onClick={ () => {
                        onCloseButtonClick(!isModalOpen);
                        resetValues();
                    }}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isModalOpen: state.isModalOpen,
    dataDepartments: state.dataDepartments,
    dataGroupsFirst: state.dataGroupsFirst,
    dataScheduleFirst: state.dataScheduleFirst,
    dataGroupsSecond: state.dataGroupsSecond,
    dataScheduleSecond: state.dataScheduleSecond,
    isFacultySelectFirst: state.isFacultySelectFirst,
    isEducationSelectFirst: state.isEducationSelectFirst,
    isCourseSelectFirst: state.isCourseSelectFirst,
    isGroupSelectFirst: state.isGroupSelectFirst,
    facultyUrlFirst: state.facultyUrlFirst,
    educationUrlFirst: state.educationUrlFirst,
    courseUrlFirst: state.courseUrlFirst,
    groupUrlFirst: state.groupUrlFirst,
    isFacultySelectSecond: state.isFacultySelectSecond,
    isEducationSelectSecond: state.isEducationSelectSecond,
    isCourseSelectSecond: state.isCourseSelectSecond,
    isGroupSelectSecond: state.isGroupSelectSecond,
    facultyUrlSecond: state.facultyUrlSecond,
    educationUrlSecond: state.educationUrlSecond,
    courseUrlSecond: state.courseUrlSecond,
    groupUrlSecond: state.groupUrlSecond,
});

const mapDispatchToProps = (dispatch) => ({
    onCloseButtonClick: (isModalOpen) => {
        dispatch(ActionCreator.setModalOpen(isModalOpen));
    },

    resetValues: () => {
        dispatch(ActionCreator.resetValues());
    },

    onFacultySelectChangeFirst: (isFacultySelectFirst, facultyUrlFirst, facultyHeaderFirst) => {
        dispatch(ActionCreator.setIsFacultySelectFirst(isFacultySelectFirst, facultyUrlFirst, facultyHeaderFirst));
    },

    onEducationSelectChangeFirst: (isEducationSelectFirst, educationUrlFirst, educationHeaderFirst) => {
        dispatch(ActionCreator.setIsEducationSelectFirst(isEducationSelectFirst, educationUrlFirst, educationHeaderFirst));
    },

    onCourseSelectChangeFirst: (isCourseSelectFirst, courseUrlFirst, courseHeaderFirst) => {
        dispatch(ActionCreator.setIsCourseSelectFirst(isCourseSelectFirst, courseUrlFirst, courseHeaderFirst));
    },

    onGroupSelectChangeFirst: (isGroupSelectFirst, groupUrlFirst, groupHeaderFirst) => {
        dispatch(ActionCreator.setIsGroupSelectFirst(isGroupSelectFirst, groupUrlFirst, groupHeaderFirst));
    },

    getDataGroupsFirst: (facultyUrlFirst, educationUrlFirst, courseUrlFirst) => {
        dispatch(ActionCreator.getDataGroupsFirst(facultyUrlFirst, educationUrlFirst, courseUrlFirst));
    },

    getDataScheduleFirst: (facultyUrlFirst, groupUrlFirst) => {
        dispatch(ActionCreator.getDataScheduleFirst(facultyUrlFirst, groupUrlFirst));
    },

    onFacultySelectChangeSecond: (isFacultySelectSecond, facultyUrlSecond, facultyHeaderSecond) => {
        dispatch(ActionCreator.setIsFacultySelectSecond(isFacultySelectSecond, facultyUrlSecond, facultyHeaderSecond));
    },

    onEducationSelectChangeSecond: (isEducationSelectSecond, educationUrlSecond, educationHeaderSecond) => {
        dispatch(ActionCreator.setIsEducationSelectSecond(isEducationSelectSecond, educationUrlSecond, educationHeaderSecond));
    },

    onCourseSelectChangeSecond: (isCourseSelectSecond, courseUrlSecond, courseHeaderSecond) => {
        dispatch(ActionCreator.setIsCourseSelectSecond(isCourseSelectSecond, courseUrlSecond, courseHeaderSecond));
    },

    onGroupSelectChangeSecond: (isGroupSelectSecond, groupUrlSecond, groupHeaderSecond) => {
        dispatch(ActionCreator.setIsGroupSelectSecond(isGroupSelectSecond, groupUrlSecond, groupHeaderSecond));
    },

    getDataGroupsSecond: (facultyUrlSecond, educationUrlSecond, courseUrlSecond) => {
        dispatch(ActionCreator.getDataGroupsSecond(facultyUrlSecond, educationUrlSecond, courseUrlSecond));
    },

    getDataScheduleSecond: (facultyUrlSecond, groupUrlSecond) => {
        dispatch(ActionCreator.getDataScheduleSecond(facultyUrlSecond, groupUrlSecond));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);