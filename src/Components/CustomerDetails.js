import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const CustomerDetails = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');

    const onClickSubmit = async (e) => {
        e.preventDefault();
        setMsg('');
        setError('');

        try {
            const response = await axios.post('https://lic-backend-production.up.railway.app/customer', {
                name,
                phoneNumber,
                email,
                address
            });
            console.log(response);
            setName('');
            setPhoneNumber('');
            setEmail('');
            setAddress('');
            setMsg('Cool, Our Agent Will Contact You Soon!');
        } catch (err) {
            console.error(err);
            setError('Oops! Something went wrong. Please try again.');
        }
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Thanks for Choosing LIC</h2>
            <form className="form border p-4 w-75 m-auto" onSubmit={onClickSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name..."
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phoneNumber"
                        placeholder="Enter your phone number..."
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit phone number."
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email (optional)</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea
                        className="form-control"
                        id="address"
                        placeholder="Enter your address..."
                        rows="2"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="text-center mb-3">
                    <button type="submit" className="btn btn-primary w-50">Submit</button>
                </div>
            </form>

            {msg && <h4 className="text-success text-center mt-4">{msg}</h4>}
            {error && <h4 className="text-danger text-center mt-4">{error}</h4>}
        </div>
    );
};

export default CustomerDetails;
