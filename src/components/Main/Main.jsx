import React from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from '../../action-creator/action-creator';
import styles from './Main.module.css';

const Main = ({ isModalOpen, dataScheduleFirst, dataScheduleSecond, onSettingsButtonClick }) => {
    return (
        <main className={styles.main}>
            <div className={styles.settings}>
                <button 
                    className={styles.settingsBtn}
                    disabled={isModalOpen}
                    onClick={ () => onSettingsButtonClick(!isModalOpen) } 
                >
                    Select Settings
                </button>
            </div>
            <div className={styles.scheduleContainer}>
                <div className={styles.scheduleFirst}>
                    {
                        dataScheduleFirst.map((itemDay, indexDay) => {
                            return (
                                <div className={styles.weekDay} key={indexDay}>
                                    {
                                        itemDay.map((itemData, indexData) => {
                                            return (
                                                <div className={styles.pair} key={indexData}></div>
                                            );
                                        })
                                    }
                                </div>
                            );
                        })
                    }
                </div>
                <div className={styles.scheduleSecond}></div>
            </div>
        </main>
    );
}

const mapStateToProps = (state) => ({
    isModalOpen: state.isModalOpen,
    dataScheduleFirst: state.dataScheduleFirst,
    dataScheduleSecond: state.dataScheduleSecond,
});

const mapDispatchToProps = (dispatch) => ({
    onSettingsButtonClick: (isModalOpen) => {
        dispatch(ActionCreator.setModalOpen(isModalOpen));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);