import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello World</h1>
    <p>Firt time using Gatsby and it's awesome</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
