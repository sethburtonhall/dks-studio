import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Styles
import { Container } from "../styles/GlobalStyles"

const Testimonials = () => {
  return (
    <StaticQuery
      query={testimonialQuery}
      render={data => {
        const { testimonials } = data.testimonial
        return (
          <Container>
            <ul>
              {testimonials.map(testimonial => (
                <div className="testimonial" key={testimonial.id}>
                  <p>{testimonial.quote}</p>
                  <p>
                    {testimonial.name} - {testimonial.title} - {testimonial.company}
                  </p>
                </div>
              ))}
            </ul>
          </Container>
        )
      }}
    />
  )
}

const testimonialQuery = graphql`
  query TestimonialQuery {
    testimonial: datoCmsTestimonial {
      testimonials {
        id
        company
        name
        title
        quote
      }
    }
  }
`
export default Testimonials
