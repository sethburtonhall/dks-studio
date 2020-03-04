import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Styles
import { StyledContactInfo } from "../styles/StyledContactInfo"
import { Button, Form } from "semantic-ui-react"

const ContactInfo = () => {
  return (
    <StaticQuery
      query={contactQuery}
      render={data => {
        // const { email, phoneNumber } = data.contact
        return (
          <StyledContactInfo>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              minima quisquam consequatur eaque modi quae qui enim labore
              officia itaque neque dolorum deserunt est debitis, nobis
              voluptate, ipsam, quia possimus! Contact me at
            </p>

            <Form
              name="Contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thanks/"
            >
              <Form.Field>
                {/* REQUIRED for Gatsby */}
                <input type="hidden" name="form-name" value="contact" />
              </Form.Field>

              <Form.Field>
                <p class="hidden">
                  <label>
                    Don’t fill this out if you're human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>
              </Form.Field>

              <Form.Field>
                <label htmlFor="name">Name</label>
                <input name="name" placeholder="Name" />
              </Form.Field>

              <Form.Field>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" />
              </Form.Field>

              <Form.Field>
                <label htmlFor="message">Message</label>
                <textarea name="message"></textarea>
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
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
