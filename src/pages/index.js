// import * as React from 'react'
// // import { Link, navigate } from 'gatsby'
// // import { getUser, isLoggedIn, logout } from '../services/auth'
// // import { StaticImage } from 'gatsby-plugin-image'

// // components
// import Layout from '../components/layout'
// import Seo from '../components/seo'
// import PageHeader from '../components/PageHeader/PageHeader'

// const IndexPage = () => (
//   <Layout>
//     <Seo title="Home" />
//     {/* <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p> */}
//     {/* <StaticImage
//       src="../images/gatsby-astronaut.png"
//       width={300}
//       quality={95}
//       formats={["auto", "webp", "avif"]}
//       alt="A Gatsby astronaut"
//       style={{ marginBottom: `1.45rem` }}
//     /> */}
//     {/* <p>
//       <Link to="/page-2/">Go to page 2</Link> <br />
//       <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
//       <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
//       <Link to="/using-dsg">Go to "Using DSG"</Link>
//     </p> */}

//     <PageHeader>
//       Standings
//     </PageHeader>
//   </Layout>
// )

// export default IndexPage
import React, { Component } from 'react'
import { navigate } from 'gatsby'
import { handleLogin, isLoggedIn } from '../services/auth'

// components
import Layout from '../components/layout'
import Seo from '../components/seo'
import PageHeader from '../components/PageHeader/PageHeader'

class Index extends Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/schedule`)
    }

    return (
      <Layout>
        <Seo title="Login" />

        <PageHeader>
          Login
        </PageHeader>
        
        <form
          method='post'
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/schedule`)
          }}
        >
          <label>
            Username
            <input
              type='text'
              name='username'
              onChange={this.handleUpdate} />
          </label>

          <label>
            Password
            <input
              type='password'
              name='password'
              onChange={this.handleUpdate} />
          </label>

          <input
            type='submit'
            value='Log In' />
        </form>
      </Layout>
    )
  }
}

export default Index