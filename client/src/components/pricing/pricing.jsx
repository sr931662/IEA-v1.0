import React from 'react'
import styles from './pricing.module.css'

export const Pricing = () => {
    return (
        <div className={styles.container}>
            <div>
            <p><span className={styles.header}>pricing</span></p>
            <ul className={styles.pricings}>
                <li>Mapping rate - ₹15 per square feet</li>
                <li>Construction rate - ₹1600 per square feet</li>
            </ul>
            </div>
        </div>
    )
}