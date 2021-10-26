import * as React from 'react'

// stylesheets
import * as styles from './PageHeader.module.css'

const PageHeader = ({ children }) => (
  <h2 className={styles.pageHeader}>
    {children}
  </h2>
)

export default PageHeader
