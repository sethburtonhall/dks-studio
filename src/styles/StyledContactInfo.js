import styled from "styled-components"
// import { device } from "./MediaQueries"
// import { theme } from "./Theme"

export const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;

  .contact-intro {
    margin-bottom: 50px;
  }

  .contact-actions {
    .hidden {
      display: none;
    }

    .social {
      margin-bottom: 50px;

      .link {
        display: flex;

        p {
          font-weight: bold;
          margin-right: 10px;
          margin-bottom: 0;
        }

        a {
          box-shadow: none;

          &:hover {
            &.instagram {
              color: rgb(219, 46, 123);
            }

            &.facebook {
              color: rgb(66, 103, 178);
            }

            &.linkedin {
              color: rgb(0, 115, 178);
            }
          }
        }
      }
    }
  }

  .form .field {
    clear: both;
    margin: 0 0 1em;

    > label {
      display: block;
      margin: 0 0 0.28571429rem 0;
      color: rgba(0, 0, 0, 0.87);
      font-size: 0.92857143em;
      font-weight: 700;
      text-transform: none;
    }

    input {
      width: 100%;
      vertical-align: top;
      margin: 0;
      outline: 0;
      -webkit-appearance: none;
      tap-highlight-color: rgba(255, 255, 255, 0);
      line-height: 1.21428571em;
      padding: 0.67857143em 1em;
      font-size: 1em;
      background: #fff;
      border: 1px solid rgba(34, 36, 38, 0.15);
      color: rgba(0, 0, 0, 0.87);
      border-radius: 0.28571429rem;
      box-shadow: 0 0 0 0 transparent inset;
      transition: color 0.1s ease, border-color 0.1s ease;

      &:focus {
        color: rgba(0, 0, 0, 0.95);
        border-color: #85b7d9;
        border-radius: 0.28571429rem;
        background: #fff;
        box-shadow: 0 0 0 0 rgba(34, 36, 38, 0.35) inset;
      }
    }

    textarea {
      width: 100%;
      height: 12em;
      min-height: 8em;
      max-height: 24em;
      vertical-align: top;
      margin: 0;
      -webkit-appearance: none;
      tap-highlight-color: rgba(255, 255, 255, 0);
      padding: 0.78571429em 1em;
      background: #fff;
      border: 1px solid rgba(34, 36, 38, 0.15);
      outline: 0;
      color: rgba(0, 0, 0, 0.87);
      border-radius: 0.28571429rem;
      box-shadow: 0 0 0 0 transparent inset;
      transition: color 0.1s ease, border-color 0.1s ease;
      font-size: 1em;
      line-height: 1.2857;
      resize: vertical;

      &:focus {
        color: rgba(0, 0, 0, 0.95);
        border-color: #85b7d9;
        border-radius: 0.28571429rem;
        background: #fff;
        box-shadow: 0 0 0 0 rgba(34, 36, 38, 0.35) inset;
        -webkit-appearance: none;
      }
    }

    button {
      
    }
  }
`
