import React from 'react';
import Select from 'react-select';  

const SelectItemFaculties = ({ selectArray, id }) => {
    const options = selectArray.map((item) => {
        return {
            value: item.url,
            label: item.shortName
        }
    });

    return (
        <>
            <label htmlFor={id}>{id.toUpperCase()}</label>
            <Select id={id} placeholder="Choose option" onChange={(event) => console.log(event.value)} options={options} />
        </>
    );

}

export default SelectItemFaculties;