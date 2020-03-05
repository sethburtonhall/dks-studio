import styled from "styled-components"
import { device } from "./MediaQueries"
import { theme } from "./Theme"
import imageBorder from "../images/bg4.jpg"
import { getRandomColor } from "../utils/helpers"

export const StyledBlogCard = styled.div`
         display: grid;
         grid-template-columns: repeat(auto-fill, 100%);
         list-style: none;
         margin: 0;

         @media ${device.mobileUp} {
           grid-template-columns: repeat(auto-fill, 48%);
           justify-content: space-between;
           grid-gap: 1rem;
         }

         @media ${device.tabletUp} {
           grid-template-columns: repeat(auto-fill, 31%);
         }

         .border-wrap {
           
           padding: 4px;
           margin-bottom: 1rem;
           border-radius: 5px;
           /* background: linear-gradient(to right, red, purple); */
           /* background: url("${imageBorder}") center center; */
           background-color: ${getRandomColor};
           background-size: 100%;
         }

         .post-card {
           display: flex;
           justify-content: space-between;
           flex-direction: column;
           box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
             0 1px 2px rgba(0, 0, 0, 0.24);
           background-color: white;
           border-radius: 5px;
           overflow: hidden;

           a {
             color: ${theme.black};
             text-decoration: none;
             box-shadow: none;
           }

           .post-info {
             display: flex;
             flex-direction: column;
             height: 115px;
             line-height: 1;
             justify-content: center;
             text-align: left;

             .title-date {
               padding: 15px;
             }

             .post-title {
               font-size: 16px;
               margin: 6px 0 0;
             }

             .post-date,
             .post-category {
               color: ${theme.gray};
               font-size: 11px;

               @media ${device.tabletUp} {
                 font-size: 12px;
               }

               @media ${device.laptop} {
                 font-size: 13px;
               }
             }

             .post-category {
               border-top: 1px solid rgba(0, 0, 0, 0.12);
               padding: 15px;
             }
           }
         }
       `
