import React, { useState } from 'react';

export default function Form() {

    const [member, setMember] = useState({ name: "", email: "", role: "" });

    function handleChange(e) {
        const updatedMember = { ...member, [e.target.name]: e.target.value };
        console.log(
            "handleChange",
            e.target.name,
            e.target.value,
            updatedMember
        );
        setMember(updatedMember);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('submitted member: ', member);
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add Members</legend>
                <div>
                    <label for="name">Name</label>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={member.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <label for="email">Email</label>
                    <div>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            value={member.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <label for="role">Role</label>
                    <div>
                        <input
                            type="text"
                            name="role"
                            placeholder="Enter your role"
                            value={member.role}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
    );
}
