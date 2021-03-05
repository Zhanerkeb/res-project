import {useState} from 'react';

export const UseForm = (initialState = {}) => {
    const [formData, setFormData] = useState(initialState)
    
    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
    }
    return {formData, handleSubmit, handleChange}
}