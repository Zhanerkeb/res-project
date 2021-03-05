import React from 'react';
import {UseForm} from '../common/hooks/useForm';

export default function Form() {
    const {formData, handleChange, handleSubmit} = UseForm(
        {
            username: '',
            password: ''
        }
    )
    const {username, password} = formData

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={username} onChange={handleChange}/>
            <input type="password" name="password" value={password} onChange={handleChange}/>
            <button type="submit">Save</button>
        </form>
    )
}