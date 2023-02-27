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
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            A little bit about me...{" "}
          </h2>
          <figure className="kg-card kg-image-card kg-width-full ">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
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
          family and friends. Check out my{" "}
          <a
            href="https://www.instagram.com/taimkitchen/reels/"
            title="TaimKitchen"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram page
          </a>{" "}
          for some recipes to try out! I also enjoy being active, some of my
          favorite classes to take are contemporary dancing and boxing classes.
        </div>
        <iframe
          src="https://drive.google.com/file/d/1KdF_9QBmVN4gydTyrG47RwzYxUIX_IPC/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
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
    benchAccounting: file(relativePath: { eq: "IMG_2461.jpg" }) {
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
