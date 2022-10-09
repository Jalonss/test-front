import React from 'react';
import { Image } from '../Image'
import styles from "../../styles/SpecsProduct.module.scss";

import ButtonAction from 'components/Button/ButtonAction';
import { ISpecsItem } from 'utils/interfaces';

type Props = {
    specs: ISpecsItem
}

export default function ItemSpecs({ specs }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.sectionHead}>
                <div>
                    <Image srcImage={specs.picture} className={styles.productImage} />
                </div>
                <div className={styles.information}>
                    <span className={styles.condition}>
                        <span>{`${specs.condition} - ${specs.sold_quantity} vendidos`}</span>
                    </span>
                    <span className={styles.title}>{specs.title}</span>
                    <span className={styles.priceInformation}>
                        <span>$</span>
                        <span className={styles.decim}>{specs.price?.amount.toLocaleString('ARS')}</span>
                        <span role='decimals'>{specs.price.decimals || '00'}</span>
                    </span>
                    <span className={styles.btnBlue}><ButtonAction className={styles.btnBlue}>Comprar</ButtonAction></span>
                </div>
            </div>
            <div className={styles.description}>
                <span role="title">Descripción del producto</span>
                <span role="description">{specs.description}</span>
            </div>
        </div>
    );
}
