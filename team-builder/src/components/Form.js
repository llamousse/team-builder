import React, { useState } from 'react';

const Form = (props) => {
    console.log(props);
    // const setPeople = props.setPeople; <-- same as Line 6
    const { submitPerson, initialPerson, buttonText, history } = props;
    const [person, setPerson] = useState(initialPerson || {name: "", email: "", role: ""});
    
    const handleChange = event => {
        setPerson({...person, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        // setPeople(people => [...people, person]);
        submitPerson(person);
        setPerson({name: "", email: "", role: ""});
        history.push("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="name" 
                value={person.name}
                name="name"
                onChange={handleChange}
            />
            <input placeholder="email" 
                value={person.email}
                name="email"
                type="email"
                onChange={handleChange} 
            />
            <input placeholder="role" 
                value={person.role}
                name="role"
                onChange={handleChange} 
            />
            <button type="submit">{buttonText}</button>
        </form>
    );
};

export default Form;