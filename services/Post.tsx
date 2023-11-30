// import { NextApiRequest, NextApiResponse } from 'next';
// import jwt_decode from 'jwt-decode';

// export default async function Post(req: NextApiRequest, res: NextApiResponse) {
//   const { method, body, headers } = req;

//   if (method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed', message: 'Only POST method is allowed' });
//   }

//   const { Endpoint, object } = JSON.parse(body);

//   console.log("Endpoint: " + Endpoint);
//   let bodyPost = null;
//   if (object !== undefined) {
//     bodyPost = JSON.stringify(object);
//   }

//   const url = `https://afefitness2023.azurewebsites.net${Endpoint}`;
//   try {
//     const apiRes = await fetch(url, {
//       method: "POST",
//       body: bodyPost,
//       credentials: "include",
//       headers: {
//         Authorization: "Bearer " + headers.authorization, // Use authorization header from incoming request
//         "Content-Type": "application/json",
//       },
//     });

//     const status = apiRes.status;

//     // Handle response data as needed, for example, sending JSON response
//     res.status(status).json({ status });

//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: 'Internal Server Error'});
//   }
// }
// post.ts
// import jwt_decode from 'jwt-decode';

// interface PostOptions {
//   Endpoint: string;
//   object: Record<string, any>;
//   handleSuccess?: (response: any) => void;
//   handleError?: (error: any) => void;
// }

// export const Post = async ({ Endpoint, object, handleSuccess, handleError }: PostOptions) => {
//   try {
//     const url = `https://afefitness2023.azurewebsites.net/${Endpoint}`;
//     const res = await fetch(url, {
//       method: 'POST',
//       body: JSON.stringify(object),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (res.ok) {
//       const data = await res.json();
//       if (handleSuccess) {
//         handleSuccess(data);
//       }
//     } else {
//       const error = await res.json();
//       if (handleError) {
//         handleError(error);
//       }
//     }

//     return res.status;
//   } catch (error) {
//     console.error('Error:', error);
//     if (handleError) {
//       handleError(error);
//     }
//     return 500; // Return a generic status code for internal server error
//   }
// };
// services/Post.ts

export interface PostOptions {
    Endpoint: string;
    object: Record<string, any>;
    handleSuccess?: (response: any) => void;
    handleError?: (error: any) => void;
  }

// export const Post = async ({ Endpoint, object }: PostOptions) => {
//     try {
//       const url = `https://afefitness2023.azurewebsites.net/${Endpoint}`;
//       const res = await fetch(url, {
//         method: "POST",
//         body: JSON.stringify(object),
//         credentials: "include",
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//           "Content-Type": "application/json",
//         },
//       });
//       return res.status;
//     } catch (error) {
//       console.error("Error:", error);
//       return 500; // Return a generic status code for internal server error
//     }
//   };
  
// export const Post = async ({ Endpoint, object, handleSuccess, handleError }: PostOptions) => {
//     try {
//       const url = `https://afefitness2023.azurewebsites.net/${Endpoint}`;
//       const res = await fetch(url, {
//         method: "POST",
//         body: JSON.stringify(object),
//         credentials: "include",
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//           "Content-Type": "application/json",
//           accept: "text/plain", // Add accept header
//         },
//       });
  
//       if (res.ok) {
//         const data = await res.json();
//         if (handleSuccess) {
//           handleSuccess(data);
//         }
//       } else {
//         const error = await res.json();
//         if (handleError) {
//           handleError(error);
//         }
//       }
  
//       return res.status;
//     } catch (error) {
//       console.error("Error:", error);
//       if (handleError) {
//         handleError(error);
//       }
//       return 500; // Return a generic status code for internal server error
//     }
//   };
// services/Post.ts
export const Post = async ({ Endpoint, object, handleSuccess, handleError }: PostOptions) => {
    try {
      const url = `https://afefitness2023.azurewebsites.net/${Endpoint}`;
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(object),
        credentials: "include",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
          accept: "text/plain",
        },
      });
  
      // Check if the status is OK (200)
      if (res.ok) {
        const data = await res.json();
        if (handleSuccess) {
          handleSuccess(data);
        }
      } else {
        const error = await res.json(); // Try to parse the error JSON
        if (handleError) {
          handleError(error);
        }
      }
  
      return res.status;
    } catch (error) {
      console.error("Error:", error);
      if (handleError) {
        handleError(error);
      }
      return 500; // Return a generic status code for internal server error
    }
  };
  
  
