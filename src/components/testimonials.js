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
            {testimonials.map(testimonial => (
              <div className="testimonial" key={testimonial.id}>
                <span className="icon left-icon">
                  <i className="fas fa-quote-left"></i>
                </span>
                <p className="quote">
                  <span className="icon right-icon">
                    <i className="fas fa-quote-right"></i>
                  </span>
                  {testimonial.quote}
                </p>
                <p className="citation">
                  <span className="name">{testimonial.name}</span> -{" "}
                  {testimonial.title} -{" "}
                  <span className="company">{testimonial.company}</span>
                </p>
              </div>
            ))}
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
