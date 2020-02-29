import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Styles
import { Container } from "../styles/GlobalStyles"

const ClientList = () => {
  return (
    <StaticQuery
      query={clientQuery}
      render={data => {
        const { clients } = data.client
        return (
          <Container>
            <ul>
              {clients.map(client => (
                <li key={client.id}>{client.name}</li>
              ))}
            </ul>
          </Container>
        )
      }}
    />
  )
}

const clientQuery = graphql`
  query ClientQuery {
    client: datoCmsClient {
      clients {
        name
        id
      }
    }
  }
`
export default ClientList
