import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Styles
import { StyledTestimonials } from "../styles/StyledTestimonials"

const Testimonials = () => {
  return (
    <StaticQuery
      query={testimonialQuery}
      render={data => {
        const { testimonials } = data.testimonial
        return (
          <StyledTestimonials>
            <ul>
              {testimonials.map(testimonial => (
                <div className="testimonial" key={testimonial.id}>
                  <p>{testimonial.quote}</p>
                  <p>
                    {testimonial.name} - {testimonial.title} -{" "}
                    {testimonial.company}
                  </p>
                </div>
              ))}
            </ul>
          </StyledTestimonials>
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
