import React from 'react';
import styles from "../../styles/CardProduct.module.scss";

 type props = {
    route?: string
}
export default function RouteMap({ route = 'This a route > value > other' }: props) {
    return (
        <div className={styles.routeMap}>
            {`${route}`}
        </div>
    );
}

