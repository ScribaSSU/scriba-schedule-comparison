import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from '../../action-creator/action-creator';
import styles from './Main.module.css';
import { time, stylesArray } from '../../utils/utils';

const Main = ({ 
    isModalOpen, 
    dataScheduleFirst, 
    dataScheduleSecond,
    facultyHeaderFirst,
    educationHeaderFirst,
    courseHeaderFirst,
    groupHeaderFirst,
    facultyHeaderSecond,
    educationHeaderSecond,
    courseHeaderSecond,
    groupHeaderSecond,
    onSettingsButtonClick
}) => {
    const compareSchedules = useCallback(() => {
        if (dataScheduleFirst.length !== 0 && dataScheduleSecond.length !== 0) {
            for (let i = 0; i < dataScheduleFirst.length; i += 1) {
                for (let j = 0; j < dataScheduleFirst[i].length; j += 1) {
                    if (dataScheduleFirst[i][j][0].name === dataScheduleSecond[i][j][0].name && 
                        dataScheduleFirst[i][j][0].name !== '' && 
                        dataScheduleFirst[i][j][0].teacher.id === dataScheduleSecond[i][j][0].teacher.id &&
                        dataScheduleFirst[i][j][0].teacher.id !== -1
                        ) {
                        stylesArray[i][j] = true;
                    }
                }
            }
        }
    }, [dataScheduleFirst, dataScheduleSecond]);

    compareSchedules();

    return (
        <main className={styles.main}>
            <div className={styles.settings}>
                <button 
                    className={styles.settingsBtn}
                    disabled={isModalOpen}
                    onClick={ () => onSettingsButtonClick(!isModalOpen) } 
                >
                    Выберите настройки
                </button>
            </div>
            <div className={styles.scheduleContainer}>
                <div className={styles.schedule}>
                    { dataScheduleFirst.length !== 0 ? <h3 className={styles.scheduleTitle}>{`${facultyHeaderFirst}, ${educationHeaderFirst} обучение, ${courseHeaderFirst} курс, ${groupHeaderFirst} группа`}</h3> : null }
                    <div className={styles.scheduleFirst}>
                        {
                            dataScheduleFirst.length !== 0 ?
                                <div className={styles.timeDay}>
                                    {
                                        time.map((item, index) => {
                                            return (
                                                <div className={styles.timePair} key={index}>
                                                    <div>{`${item.lessonTime.hourStart}:${item.lessonTime.minuteStart < 10 ? `0${item.lessonTime.minuteStart}` : item.lessonTime.minuteStart}`}</div>
                                                    <div>{`${item.lessonTime.hourEnd}:${item.lessonTime.minuteEnd < 10 ? `0${item.lessonTime.minuteEnd}` : item.lessonTime.minuteEnd}`}</div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                                : null
                        }

                        {
                            dataScheduleFirst.map((itemDay, indexDay) => {
                                return (
                                    <div className={styles.weekDay} key={indexDay}>
                                        {
                                            itemDay.map((itemData, indexData) => {
                                                return (
                                                    <div className={stylesArray[indexDay][indexData] ? `${styles.pair} ${styles.green}` : styles.pair} key={indexData}>
                                                        <div>{itemData[0].name}</div>
                                                        <div>{itemData[0].place}</div>
                                                        <div>{`${itemData[0].teacher.surname} ${itemData[0].teacher.name} ${itemData[0].teacher.patronymic}`}</div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className={styles.schedule}>
                    { dataScheduleSecond.length !== 0 ? <h3 className={styles.scheduleTitle}>{`${facultyHeaderSecond}, ${educationHeaderSecond} обучение, ${courseHeaderSecond} курс, ${groupHeaderSecond} группа`}</h3> : null }
                    <div className={styles.scheduleSecond}>
                        {
                            dataScheduleSecond.length !== 0 ?
                                <div className={styles.timeDay}>
                                    {
                                        time.map((item, index) => {
                                            return (
                                                <div className={styles.timePair} key={index}>
                                                    <div>{`${item.lessonTime.hourStart}:${item.lessonTime.minuteStart < 10 ? `0${item.lessonTime.minuteStart}` : item.lessonTime.minuteStart}`}</div>
                                                    <div>{`${item.lessonTime.hourEnd}:${item.lessonTime.minuteEnd < 10 ? `0${item.lessonTime.minuteEnd}` : item.lessonTime.minuteEnd}`}</div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                                : null
                        }

                        {
                            dataScheduleSecond.map((itemDay, indexDay) => {
                                return (
                                    <div className={styles.weekDay} key={indexDay}>
                                        {
                                            itemDay.map((itemData, indexData) => {
                                                return (
                                                    <div className={stylesArray[indexDay][indexData] ? `${styles.pair} ${styles.green}` : styles.pair} key={indexData}>
                                                        <div>{itemData[0].name}</div>
                                                        <div>{itemData[0].place}</div>
                                                        <div>{`${itemData[0].teacher.surname} ${itemData[0].teacher.name} ${itemData[0].teacher.patronymic}`}</div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}

const mapStateToProps = (state) => ({
    isModalOpen: state.isModalOpen,
    dataScheduleFirst: state.dataScheduleFirst,
    dataScheduleSecond: state.dataScheduleSecond,
    facultyHeaderFirst: state.facultyHeaderFirst,
    educationHeaderFirst: state.educationHeaderFirst,
    courseHeaderFirst: state.courseHeaderFirst,
    groupHeaderFirst: state.groupHeaderFirst,
    facultyHeaderSecond: state.facultyHeaderSecond,
    educationHeaderSecond: state.educationHeaderSecond,
    courseHeaderSecond: state.courseHeaderSecond,
    groupHeaderSecond: state.groupHeaderSecond,
});

const mapDispatchToProps = (dispatch) => ({
    onSettingsButtonClick: (isModalOpen) => {
        dispatch(ActionCreator.setModalOpen(isModalOpen));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);