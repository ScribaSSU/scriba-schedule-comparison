import React from 'react';
import Select from 'react-select';
import styles from './SelectItem.module.css';

const SelectItem = (props) => {
    return (
        <div className={styles.selectItem}>
            <label className={styles.selectLabel} htmlFor={props.id}>{props.labelName}</label>
            <Select 
                id={props.id} 
                placeholder={props.placeholder} 
                onChange={ (event) => {
                    props.onSelectChange(true, event.value, event.label);
                }} 
                options={props.selectArray} 
            />
        </div>
    );

}

export default SelectItem;