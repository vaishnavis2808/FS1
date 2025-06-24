// import  { useState } from 'react'
// import { useEffect } from 'react'
// const Form = () => {
//     const [users,setUsers]=useState([])
//     const [formData,setFormData]=useState({
//         name:'',
//         email:'',
//         password:'',
//         department:''
//     })
//     const fetchUsers=async()=>{
//         const res=await axios.get('http://localhost:3000/getform')
//         setUsers(res.data)
//         console.log(res);
//     }
//     useEffect(()=>{
//         fetchUsers()
//     },[])
//     const handleChange=(e)=>{
//         const {name,value}=e.target
//         setFormData((prev=>({
//             ...prev,
//             [name]:value
//         })))
//     }
//      const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:3000/postform', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       console.log('Submitted:', data);
//       alert('Form submitted successfully');

//       // Clear form
//       setFormData({
//         name: '',
//         email: '',
//         password: '',
//         department: '',
//       });
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };
//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="">Name:</label>
//             <input type="text" name="name" value={formData.name} onChange={handleChange}/> 
//             <br />
//             <label htmlFor="">Email:</label>
//             <input type="text" name="email" value={formData.email} onChange={handleChange}/>
//             <br />
//             <label htmlFor="">Password:</label>
//             <input type="text" name="password" value={formData.password} onChange={handleChange}/>
//             <br />
//              <label htmlFor="">Department</label>
//             <input type="text" name="department" value={formData.department} onChange={handleChange}/>
//             <br />
//             <button type="submit">Submit</button>
//         </form>
//         <h1>User details</h1>
//         <ul>
//             {users.map((user)=>(
//                 <li key={user._id}>{user.name} | {user.email} | {user.department}</li>
//             ))}
//         </ul>
//     </div>
//   )
// }

// export default Form
import React, { useState, useEffect } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    department: ''
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log('Submitted:', data);

      // Reset form
      setFormData({
        name: '',
        email: '',
        password: '',
        department: ''
      });

      // Refresh user list
      fetchUsers();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/getform');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <label>Name:</label><br />
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <br /><br />

        <label>Email:</label><br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <br /><br />

        <label>Password:</label><br />
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <br /><br />

        <label>Department:</label><br />
        <select name="department" value={formData.department} onChange={handleChange}>
          <option value="">Select Department</option>
          <option value="IT">IT</option>
          <option value="ECE">ECE</option>
          <option value="CSE">CSE</option>
          <option value="AIDS">AIDS</option>
        </select>
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <h2>User Details</h2>
      <ul>
        {users.map((user, index) => (
          <li key={user._id || index}>
            {user.name} | {user.email} | {user.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
