import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const CustomerDetails = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [msg,setMsg] = useState('')

    const onClickSubmit = async(e) =>{
        e.preventDefault();
        const response = await axios.post('https://lic-backend-production.up.railway.app/customer',{name,phoneNumber,email,address})
        console.log(response);
        setName('')
        setAddress('')
        setEmail('')
        setPhoneNumber('')
        setMsg('Cool, Our Agent Will concact soon!!')
    }

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Thanks for choosing LIC </h2>
            <form className="form border w-75 m-auto" onSubmit={onClickSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label text-center ">Name</label>
                    <input
                        type="text"
                        className="form-control w-75 m-auto"
                        id="name"
                        placeholder="Enter your name..."
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label ml-5">Phone Number</label>
                    <input
                        type="tel"
                        className="form-control w-75 m-auto"
                        id="phoneNumber"
                        placeholder="Enter your phone number..."
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email (optional)</label>
                    <input
                        type="email"
                        className="form-control w-75 m-auto"
                        id="email"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea
                        className="form-control w-75 m-auto"
                        id="address"
                        placeholder="Enter your address..."
                        rows="2"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="text-center mb-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                
            </form>
            <h3 className='text-success'>{msg}</h3>
        </div>
    );
};

export default CustomerDetails;
