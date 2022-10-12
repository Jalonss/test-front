import React from 'react'

type props = {
    role: string
    srcImage: string
    className: string
    onClick?: () => void
}
export const Image = ({ role, srcImage, className, onClick }: props) => {
    return (
        <object
            data={srcImage}
            type="image/png"
            className={className}
            onClick={onClick}
            role={role}
        >
            <img className={className} src={srcImage} />
        </object>
    )
}
