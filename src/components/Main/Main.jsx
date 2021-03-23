import React from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from '../../action-creator/action-creator';
import styles from './Main.module.css';

const Main = ({ isModalOpen, onSettingsButtonClick }) => {
    return (
        <main className={styles.main}>
            <div className={styles.settings}>
                <button onClick={ () => onSettingsButtonClick(!isModalOpen) } className={styles.settingsBtn}>Select Settings</button>
            </div>
            <div className={styles.scheduleContainer}>
                <div className={styles.scheduleFirst}></div>
                <div className={styles.scheduleSecond}></div>
            </div>
        </main>
    );
}

const mapStateToProps = (state) => ({
    isModalOpen: state.isModalOpen
});

const mapDispatchToProps = (dispatch) => ({
    onSettingsButtonClick: (isModalOpen) => {
        dispatch(ActionCreator.setModalOpen(isModalOpen));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);