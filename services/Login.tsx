// import axios from 'axios';

// export interface LoginRequestBody {
//   // Define the structure of your login request body based on your Swagger definition
//   email: string;
//   password: string;
// }

// export interface TokenResponse {
//   // Define the structure of your token response based on your Swagger definition
//   token: string;
// }

// const BASE_URL = 'https://afefitness2023.azurewebsites.net/api';

// export const login = async (loginData: LoginRequestBody): Promise<TokenResponse> => {
//   try {
//     const response = await axios.post<TokenResponse>(`${BASE_URL}/Users/login`, loginData, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     return response.data;
//   } catch (error) {
//     // Handle error (e.g., show an error message)
//     throw error;
//   }
// };


import axios from 'axios';
import { jwtDecode } from "jwt-decode";

export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface TokenResponse {
  token: string;
}

const BASE_URL = 'https://afefitness2023.azurewebsites.net/api';

export const login = async (loginData: LoginRequestBody): Promise<TokenResponse> => {
  try {
    const response = await axios.post<TokenResponse>(`${BASE_URL}/Users/login`, loginData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Store token and role in localStorage
    localStorage.setItem('token', response.data.token);
    
    // Explicitly type jwt_decode
    const decode = jwtDecode as (token: string) => Record<string, any>;
    
    for (const prop in decode(response.data.token)) {
      if (decode(response.data.token)[prop] === 'PersonalTrainer' || decode(response.data.token)[prop] === 'Client') {
        localStorage.setItem('role', decode(response.data.token)[prop]);
      }
    }

    return response.data;
  } catch (error) {
    // Handle error (e.g., show an error message)
    throw error;
  }
};



