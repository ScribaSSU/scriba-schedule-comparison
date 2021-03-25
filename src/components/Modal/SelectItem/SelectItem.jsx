import React from 'react';
import Select from 'react-select';  

const SelectItem = (props) => {
    return (
        <>
            <label htmlFor={props.id}>{props.id.toUpperCase()}</label>
            <Select 
                id={props.id} 
                placeholder={props.placeholder} 
                onChange={ (event) => {
                    props.onSelectChange(true, event.value, event.label);
                }} 
                options={props.selectArray} 
            />
        </>
    );

}

export default SelectItem;