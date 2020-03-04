import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Helpers
import { getRandomColor } from "../utils/helpers"

// Styles
import { StyledClients } from "../styles/StyledClients"

const ClientList = () => {
  return (
    <StaticQuery
      query={clientQuery}
      render={data => {
        const { clients } = data.client
        return (
          <StyledClients>
            <h1>Clients</h1>
            <div className="clients">
              <ul>
                {clients.slice(0, 10).map(client => (
                  <li key={client.id}>
                    <i
                      className="fas fa-star"
                      style={{ color: getRandomColor() }}
                    ></i>
                    {client.name}
                  </li>
                ))}
              </ul>
              <ul>
                {clients.slice(11, 22).map(client => (
                  <li key={client.id}>
                    <i
                      className="fas fa-star"
                      style={{ color: getRandomColor() }}
                    ></i>
                    {client.name}
                  </li>
                ))}
              </ul>
              <ul>
                {clients.slice(23, 34).map(client => (
                  <li key={client.id}>
                    <i
                      className="fas fa-star"
                      style={{ color: getRandomColor() }}
                    ></i>
                    {client.name}
                  </li>
                ))}
              </ul>
              <ul>
                {clients.slice(35, 46).map(client => (
                  <li key={client.id}>
                    <i
                      className="fas fa-star"
                      style={{ color: getRandomColor() }}
                    ></i>
                    {client.name}
                  </li>
                ))}
              </ul>
            </div>
          </StyledClients>
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
