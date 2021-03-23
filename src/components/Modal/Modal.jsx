import React from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from '../../action-creator/action-creator';
import styles from './Modal.module.css';
import SelectItem from './SelectItemFaculties/SelectItem';

const Modal = ({ dataDepartments, isModalOpen, onCloseButtonClick }) => {
    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modalTitle}>
                <h3>Settings</h3>
            </div>
            <div className={styles.modalMain}>
                <div className={styles.modalMainFirst}>
                    <SelectItem selectArray={dataDepartments} id="faculties" />
                </div>
                <div className={styles.modalMainSecond}>

                </div>
            </div>
            <div className={styles.modalBtnContainer}>
                <button className={styles.modalBtn}>OK</button>
                <button className={styles.modalBtn} onClick={ () => onCloseButtonClick(!isModalOpen) }>Cancel</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isModalOpen: state.isModalOpen,
    dataDepartments: state.dataDepartments,
});

const mapDispatchToProps = (dispatch) => ({
    onCloseButtonClick: (isModalOpen) => {
        dispatch(ActionCreator.setModalOpen(isModalOpen));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);