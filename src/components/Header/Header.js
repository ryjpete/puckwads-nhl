import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import * as styles from './Header.module.css'

const Header = ({ siteTitle }) => (
  <header id={`${styles.header}`}>
    <h1 className={`${styles.h1}`}>
      <Link
        to="/"
        className={`${styles.link}`}
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
