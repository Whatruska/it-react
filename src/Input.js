import styled from "styled-components";
import React from "react";

const CustomInput = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #1390b9;
`;

export const Input = (props) => {
    const ref = React.createRef();

    const handleChange = () => {
        props.onChange(ref.current.value);
    }

    return (
        <CustomInput 
            ref={ref}
            placeholder={props.placeholder}
            type={props.type}
            onKeyUp={handleChange}
        />
    )
}