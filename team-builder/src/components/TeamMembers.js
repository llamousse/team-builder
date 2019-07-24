import React, { useState } from 'react';

export default function TeamMembers() {

    // const [member, setMember] = useState({ name: "", email: "", role: "" });
    const [member, setMember] = useState({ name: "Alpaca", email: "alpaca@gmail.com", role: "Flower Eater" });

    return (
        <div>
            <p>Member Name: {member.name}
                Email: {member.email}
                Role: {member.role}
            </p>
        </div>
    );
}