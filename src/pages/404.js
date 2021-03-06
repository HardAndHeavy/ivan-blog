import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="404: Not Found" />
        <h1>Страница не найдена</h1>
        <p>Такая ссылка на существует... Это печально.</p>
      </Layout>
    )
  }
}

export default NotFoundPage
