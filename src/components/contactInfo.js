import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Styles
import { StyledContactInfo } from "../styles/StyledContactInfo"

const ContactInfo = () => {
  return (
    <StaticQuery
      query={contactQuery}
      render={data => {
        const { email, phoneNumber } = data.contact
        return (
          <StyledContactInfo>
            <div className="contact">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit minima quisquam consequatur eaque modi quae qui enim
                labore officia itaque neque dolorum deserunt est debitis, nobis
                voluptate, ipsam, quia possimus!
              </p>
              <div>
                <i class="far fa-envelope"></i>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              <div>
                <i class="fas fa-mobile-alt"></i>
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              </div>
            </div>
          </StyledContactInfo>
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
