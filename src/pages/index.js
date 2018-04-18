import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Card, Button } from 'semantic-ui-react';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="ui container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
          </div>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'blog-post')
            .map(({ node: post }) => (
              <Card fluid key={post.id}>
                <Card.Content>
                  <Card.Header as={Link} to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Card.Header>
                  <Card.Meta>{post.frontmatter.date}</Card.Meta>
                  <Card.Description>{post.excerpt}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button basic as={Link} to={post.fields.slug}>Keep Reading →</Button>
                </Card.Content>
              </Card>
            ))}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
