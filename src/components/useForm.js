import { useState } from "react";

export const useForm = () => {
    const [form, setForm] = useState({username: '', password: '', remember: false});

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setForm(prevForm => ({
            ...prevForm,
            [name]: name === 'remember' ? !prevForm.remember : value
        }));
    };

    return {
        formState: form,
        onInputChange: handleInputChange
    };
}