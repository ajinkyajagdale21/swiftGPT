import React from 'react'
import styles from './Search.module.css'

export const Search = () => {
  return (
    <div className={styles.searchContainer}>
        <input className={styles.searchInput} placeholder='Send a message'/>
    </div>
  )
}
