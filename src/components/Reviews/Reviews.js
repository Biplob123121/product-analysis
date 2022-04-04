import React from 'react';
import useCustomers from '../../hooks/useReviews';
import Card from '../Card/Card';
import './Reviews.css';

const Reviews = () => {
    const [customers] =useCustomers();
    //console.log(customers);
    return (
        <div className='customers-container'>
            <h2>See All Customers Reviews :</h2>
            <div className='customers'>
                {
                    customers.map(customer => <Card
                    key={customer.id}
                    customer={customer}></Card>)
                }
            </div>
            
        </div>
    );
};

export default Reviews;