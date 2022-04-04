import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <section className='blogs-container'>
            <h2>Question and Answer :</h2>
            <div className='blogs'>
                <div className='blog'>
                    <h3>What is Context API ?</h3>
                    <p>Context Api is a React structure which allows to manage global application states in react apps without restoring to props drilling. When We transfer data parents node child node their accross a various states in props drilling method. To avoid that system we use the Context API.</p>
                </div>
                <div className='blog'>
                    <h3>What is Semantic tag ?</h3>
                    <p>In HTML5, there are included some important tag which make easy to identify various component, this tag are called Semantic tag. For example, the section tag, article tag, nav tag, aside tag etc. When we use this tag, we can easily understand about this content.</p>
                </div>
                <div className='blog'>
                    <h3>What is inline block and inline block element ?</h3>
                    <p>When we use some inline tag, we can not set height and width. if, We set that display inline block then we can set height and width.There are some element which have set margin and padding without setting as custom. this elements are called inline block element.</p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;