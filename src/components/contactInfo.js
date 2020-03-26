import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Styles
import { StyledContactInfo } from "../styles/StyledContactInfo"
import { Button } from "../styles/StyledButton"

const ContactInfo = () => {
  return (
    <StaticQuery
      query={contactQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        const contact = data.contact
        return (
          <StyledContactInfo>
            {/* <h1 className="title">Contact</h1> */}
            <p className="contact-intro">
              {contact.intro}
            </p>

            <div className="contact-actions">
              <div className="social">
                <h2>Around the Web</h2>
                <ul>
                  <li className="link">
                    <p>Instagram:</p>{" "}
                    <a
                      className="instagram"
                      href={social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @davidkstanley.studio
                    </a>
                  </li>
                  <li className="link">
                    {" "}
                    <p>Facebook:</p>
                    <a
                      className="facebook"
                      href={social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @davidkstanley
                    </a>
                  </li>
                  <li className="link">
                    {" "}
                    <p>LinkedIn:</p>
                    <a
                      className="linkedin"
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @davidkstanley
                    </a>
                  </li>
                </ul>
              </div>

              <p>You can also contact me through this form.</p>

              <form
                className="form"
                name="Contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/thanks/"
              >
                <div className="field">
                  {/* REQUIRED for Gatsby */}
                  <input type="hidden" name="form-name" value="contact" />
                </div>

                <div className="field">
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you're human:{" "}
                      <input name="bot-field" />
                    </label>
                  </p>
                </div>

                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input name="name" />
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" />
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message"></textarea>
                </div>

                <Button type="submit">Submit</Button>
              </form>
            </div>
          </StyledContactInfo>
        )
      }}
    />
  )
}

const contactQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        social {
          facebook
          instagram
          linkedin
        }
      }
    }
    contact: datoCmsContact {
      intro
    }
  }
`

export default ContactInfo
