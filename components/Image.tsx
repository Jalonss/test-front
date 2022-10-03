import React from 'react';

type props = {
    srcImage: string;
    className: string;
}
export const Image = ({
    srcImage,
    className
}: props) => {
    return (
        <object
            data={srcImage}
            type="image/png"
            className={className}
        >
            <img
                className={className}
                src={srcImage}
            />
        </object>
    );
}

