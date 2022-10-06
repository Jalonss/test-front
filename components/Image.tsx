import React from 'react';

type props = {
    srcImage: string;
    className: string;
    onClick?: () => void
}
export const Image = ({
    srcImage,
    className,
    onClick
}: props) => {
    return (
        <object
            data={srcImage}
            type="image/png"
            className={className}
            onClick={onClick}
        >
            <img
                className={className}
                src={srcImage}
            />
        </object>
    );
}

