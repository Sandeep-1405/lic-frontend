import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Admin = () => {
    const [customersDetails, setCustomerDetails] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const customers = await axios.get('https://lic-backend.vercel.app');
                console.log(customers.data.customers);
                setCustomerDetails(customers.data.customers);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCustomers();
    }, []);

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Customer Details</h1>
            {customersDetails.length !== 0 ? (
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customersDetails.map((customer, index) => (
                            <tr key={index}>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phoneNumber}</td>
                                <td>{customer.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h3 className="text-center">No Customers Found</h3>
            )}
        </div>
    );
};

export default Admin;
