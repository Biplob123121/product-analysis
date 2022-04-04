import React from 'react';
import useCustomers from '../../hooks/useReviews';
import laptop from '../../pic/laptop.png';
import Card from '../Card/Card';
import './Home.css';

const Home = () => {
    const [customers, setCustomeers] = useCustomers();
    const threeCustomers =customers.slice(0, 3);
    
    //console.log(threeCustomer);
    //console.log(customers.length);
    return (
       <section className='home-container'>
           <div className='header-container'>
               <div className='header-info'>
                    <div>
                        <h1>Welcome to <span id='site-title'>Laptop Mart.</span></h1>
                        <h3>New Products is Available Now!!!</h3>
                        <p>Ramadan is running. Our new attractive products is available now. We offers a great discount on all products. To get your products, visit our website as soon as possible...</p>
                        <button className='product-btn'>SHOW PRODUCTS</button>
                    </div>
               </div>
               <img className='header-img' src={laptop} alt="" />
           </div>
           <div className='customer-container'>
               <h2>Customer Reviews :</h2>
              <div className='card-container'>
                 {
                   threeCustomers.map(customer =><Card
                   key={customer.id}
                   customer={customer}></Card>)
                 }
              </div>
              <div className='see-btn'>
                    <button  className='product-btn'>SEE MORE</button>
              </div>
           </div>
       </section>
    );
};

export default Home;