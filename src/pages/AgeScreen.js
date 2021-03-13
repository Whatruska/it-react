import React from 'react';
import {useState} from "react";
import {Input} from "../Input";

export const AgeScreen = () => {
    const [age, setAge] = useState();

    return (
        <div>
            <Input placeholder="Возраст" onChange={(value) => setAge(value)} type="text"/>
            <div>
                Возраст: {age}
            </div>
        </div>
    )
}