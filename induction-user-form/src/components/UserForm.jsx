import { useState } from "react";

export default function UserForm({ initialState, onSubmit }) {
    const [formState, setFormState] = useState(() => {
        if (initialState)
            return initialState;
        return { name: '', country: '', is_iron_man: false };
    });

    const onUpdateName = (ev) => {
        setFormState(prev => ({...prev, name: ev.target.value}))
    }

    const onSelectCountry = (ev) => {
        setFormState(prev => ({...prev, name: ev.target.value}))
    }

    const onUpdateIsIronMan = (state) => {
        setFormState(prev => ({...prev, is_iron_man: state}));
    }

    const handleSubmit = () => {
        onSubmit(formState);
        setFormState({});
    }
    return <form className="form-box">
        <h2>User Register</h2>
        <input value={formState.name} type="text" className="custom-input-select" placeholder="Name" onChange={onUpdateName}/>
        <select value={formState.country} className="custom-input-select" onChange={onSelectCountry}>
            <option value="">Select</option>
        </select>
        <div className="radios-group">
            <p className="radio-label">Your are Iron</p>
            <div className="radios-container">
                <div className="radio-box">
                    Yes <input type="radio" name="iron" checked={formState.is_iron_man} onClick={() => onUpdateIsIronMan(true)} />
                </div>
                <div className="radio-box">
                    No <input type="radio" name="iron" checked={!formState.is_iron_man} onClick={() => onUpdateIsIronMan(false)} />
                </div>
            </div>
        </div>
        <div className="flex-center-center">
            <button className="submit-button" onClick={handleSubmit}>
                <span>Submit</span>
            </button>
        </div>
    </form>
}