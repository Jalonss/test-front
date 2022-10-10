import React from 'react'

type Props = {
    type: string;
    name: string;
    className: string;
    placeholder?: string;
    autoComplete?: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    role?: string;
}

export default function InputForm({ type, name, className, placeholder = '', autoComplete = 'off', handleChange, role }: Props) {
    return (
        <input
            type={type}
            name={name}
            className={className}
            placeholder={placeholder}
            autoComplete={autoComplete}
            onChange={handleChange}
            role={role}
        />
    )
}
