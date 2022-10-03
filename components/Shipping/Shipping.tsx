import React from 'react';
import Image from 'next/image'
import shipping from '../../Assets/ic_shipping@2x.png.png'

type IShipping = {
    className?: string;
}

export default function Shipping({ className }: IShipping) {
    return (

        <Image
            src={shipping}
            alt="Shipping"
            className={className ? className : ''}
            height={32}
            width={32}
        />

    );
}

