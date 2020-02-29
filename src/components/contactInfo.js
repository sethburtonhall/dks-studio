import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Styles
import { Container } from "../styles/GlobalStyles"

const ContactInfo = () => {
  return (
    <StaticQuery
      query={contactQuery}
      render={data => {
        const {
          email,
          phoneNumber,
        } = data.contact
        return (
          <Container>
            <div className="contact">
              <div>{email}</div>
              <div>{phoneNumber}</div>
            </div>
          </Container>
        )
      }}
    />
  )
}

const contactQuery = graphql`
  query ContactQuery {
    contact: datoCmsContact {
      email
      phoneNumber
    }
  }
`

export default ContactInfo
