import { useState } from "react";

const useForm = (initialData, onValidate) => {
    const [form, setForm] = useState(initialData);
    const [errors, setError] = useState({});

    const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    const err = onValidate(form);
    setError(err);

    if (Object.keys(err).length === 0) {
        fetch("https://formsubmit.co/ajax/DanielRC@rikudev.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(form),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            data.success === "true" && setForm(initialData);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    };

    return { form, errors, handleChange, handleSubmit };
};

export default useForm;