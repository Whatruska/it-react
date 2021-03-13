import React, { useEffect } from 'react';
import {useState} from "react";
import {Input} from "../Input";
export const HeightAndWeightScreen = () => {
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();

    const [text, setText] = useState();

    useEffect(() => {
        const diff = weight - (height - 100);
        if (diff > 0) {
            setText(`Вам нужно похудеть на ${diff} килограмм`);
        } else {
            setText("Ваш вес в норме");
        }
    }, [weight, height]);

    return (
        <div>
            <Input placeholder="Вес" onChange={(value) => setWeight(value)} type="text"/>
            <Input placeholder="Рост" onChange={(value) => setHeight(value)} type="text"/>
            <div>
                {text}
            </div>
        </div>
    )
}