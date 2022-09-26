// import { useStaticQuery, graphql } from "gatsby"

// const UseMaps = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allLocationData {
//         edges {
//           node {
//             status
//             results {
//               geometry {
//                 location {
//                   lat
//                   lng
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//     return data.allLocationData.edges[0].node.results[0].geometry;
//   // return data.allLocationData.edges[0].node.results.map(result => ({
//   //   lat: result.geomotry,
//   //   lng: result.geomotry
//   // }));

// }

// export default UseMaps;