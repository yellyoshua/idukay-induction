import { useCallback, useEffect, useState } from "react";
import Select from "./Select";

const countries = [
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "MX", label: "Mexico" },
    { value: "EC", label: "Ecuador" },
];
const defaultUser = { name: '', country: '', editable: false };

export default function UserForm({ initialState, onSubmit }) {
    const [formState, setFormState] = useState({...defaultUser});

    const onUpdateName = (ev) => {
        setFormState(prev => ({...prev, name: ev.target.value}))
    }

    const onSelectCountry = (ev) => {
        setFormState(prev => ({...prev, country: ev.target.value}))
    }

    const onUpdateEditable = (state) => {
        setFormState(prev => ({...prev, editable: state}));
    }

    const hasValidForm = () => formState.name.length > 0 &&
        formState.country.length > 0;

    const handleSubmit = useCallback(() => {
        if (hasValidForm()) {
            onSubmit(formState);
            setFormState({...defaultUser});
        }

    }, [formState]);

    useEffect(() => {
        initialState && setFormState(initialState);
    }, [initialState]);

    return <form className="form-box">
        <h2>CRM</h2>
        <input
            value={formState.name}
            type="text"
            className="custom-input-select"
            placeholder="Name"
            onChange={onUpdateName}
        />
        <Select
            placeHolder="Select country"
            selected={formState.country}
            onChange={onSelectCountry}
            options={countries}
        />
        <div className="radios-group">
            <p className="radio-label">Editable</p>
            <div className="radios-container">
                <div className="radio-box">
                    Yes <input type="radio" checked={formState.editable} onChange={() => onUpdateEditable(true)} />
                </div>
                <div className="radio-box">
                    No <input type="radio" checked={!formState.editable} onChange={() => onUpdateEditable(false)} />
                </div>
            </div>
        </div>
        <div className="flex-center-center">
            <button type="button" className="submit-button" onClick={handleSubmit}>
                <span>Create/Update user</span>
            </button>
        </div>
    </form>
}