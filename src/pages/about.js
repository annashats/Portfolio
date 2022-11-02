import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Hi Everyone{" "}
          </h2>
          <h3>About - Work</h3>
          I’m a UX/UI Designer based out of NYC with 2 years of professional
          experience under my belt. As a Deloitte consultant, I worked on
          developing both my core consulting skills as well as my UI design
          skills, a combination which really helps me not just design well but
          also articulate the enormous value-add and importance of human
          centered design and best practices.
          <h3>About - School</h3>I have my Bachelors and Master of Professional
          Studies degrees in Computing and Information Sciences with a
          concentration in Human Computer Interaction and Interactive
          Technologies from Cornell University. Throughout most of my time at
          Cornell as a student, I was also a teaching assistant for Design and
          Programming for the Web where we focused heavily on human centered
          design as well as implementation.
          <h3>About - Fun</h3>
          Outside of work, I love to cook. Growing up in a family that barely
          went out to eat, the love for cooking was instilled in me from a young
          age. Especially when I get to recreate dishes that I grew up with
          coming from Ukrainian and Israeli culture and ESPECIALLY when it’s for
          family and friends. Check out my Instagram page for some recipes to
          try out! I also enjoy being active, some of my favorite classes to
          take are contemporary dancing and boxing classes.
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure>
          <h3 id="dynamic-styles">Dynamic styles</h3>
          <p>
            London comes with photo-centric main layout best suited to
            photography, graphics portfolios and other image-heavy uses.
          </p>
          <p>
            Both post and page templates are light and minimal, with all the
            focus on the content while the design of the theme gets out of the
            way. Beneath the hood, London enjoys the full power of the{" "}
            <a href="https://docs.ghost.org/api/handlebars-themes/">
              Ghost Handlebars Theme API
            </a>{" "}
            to provide limitless customisation options and dynamic styles.
          </p>
          <p>
            Don't forget to check out the{" "}
            <a href="https://docs.ghost.org/integrations/">
              Ghost Integrations Directory
            </a>{" "}
            for more ways to integrate Ghost with your favourite services.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(relativePath: { eq: "Profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
