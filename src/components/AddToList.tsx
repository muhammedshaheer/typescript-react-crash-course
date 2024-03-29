import React, { useState } from "react";

import { IState as Props } from '../App'

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
    const initialInput = {
        name: "",
        age: "",
        img: "",
        note: ""
    }
    const [input, setInput] = useState(initialInput)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const handleClick = (): void => {
        if (!input.name || !input.age || !input.img) {
            return
        }
        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note
            }
        ])
        setInput(initialInput)
    }

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Name"
                className="AddToList-input"
                name="name"
                value={input.name}
                onChange={handleChange}
            />
            <input
                type="number"
                placeholder="Age"
                className="AddToList-input"
                name="age"
                value={input.age}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Image Url"
                className="AddToList-input"
                name="img"
                value={input.img}
                onChange={handleChange}
            />
            <textarea
                placeholder="Notes"
                className="AddToList-input"
                name="note"
                value={input.note}
                onChange={handleChange}
            />
            <button
                className="AddToList-btn"
                onClick={handleClick}
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList