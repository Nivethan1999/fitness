// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import Post from '@/services/Post';

// const CreateClientPage: React.FC = () => {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     personalTrainerId: 0, // Provide the actual personalTrainerId value
//     accountType: 'client', // Provide the actual accountType value
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const endpoint = 'api/Users'; // Provide the correct endpoint
//       const status = await Post({ Endpoint: endpoint, object: formData });

//       if (status === 201) {
//         // Assuming that 201 status code indicates successful creation
//         console.log('Client created successfully');
//         // Redirect to a success page or handle accordingly
//         router.push('/success');
//       } else {
//         console.log('Client creation failed');
//         // Handle failure, show error message, etc.
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle error, show error message, etc.
//     }
//   };

//   return (
//     <div>
//       <h1>Create Client</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           First Name:
//           <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Last Name:
//           <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
//         </label>
//         <br />
//         {/* Additional input fields for personalTrainerId and accountType */}
//         <button type="submit">Create Client</button>
//       </form>
//     </div>
//   );
// };

// export default CreateClientPage;
// CreateClientPage.tsx


"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Post, PostOptions } from '@/services/Post';

const CreateClientPage: React.FC = () => {
//   const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    personalTrainerId: 0,
    accountType: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const endpoint = 'api/Users';

    try {
      const status = await Post({
        Endpoint: endpoint,
        object: formData,
        handleSuccess: (data) => {
          console.log('Client created successfully:', data);
        //   router.push('/success');
        },
        handleError: (error) => {
          console.error('Client creation failed:', error);
          // Handle failure, show error message, etc.
        },
      });

      // You can check the status if needed
      console.log('Status:', status);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Create Client</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Personal Trainer ID:
          <input
            type="number"
            name="personalTrainerId"
            value={formData.personalTrainerId}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Account Type:
          <input type="text" name="accountType" value={formData.accountType} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Create Client</button>
      </form>
    </div>
  );
};

export default CreateClientPage;
