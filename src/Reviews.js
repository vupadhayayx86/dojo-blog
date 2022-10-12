import React from 'react'
import useFetch from './useFetch';
import { Link } from 'react-router-dom';

export default function Reviews() {
    const {data:reviews,risPending,rerror}=useFetch('http://localhost:8000/reviews');
    console.log(reviews);
  return (
    <div className='blog-list'>
        <h1>All Reviews</h1>
        <p className='new-review'><Link to="/addreview" style={{
                    backgroundColor:'#f1356d',
                    color:'white',
                    borderRadius:'5px',
                    textDecoration:'none',
                    fontSize:16,
                    padding:5,
                    marginBottom:10
                  }}>Add Review</Link></p>
        {reviews &&
            reviews.map((review)=>(
                <div className="blog-preview" key={review.id}>
                  <Link to={`/reviews/${review.id}`} >
                  <h2>{review.username}</h2>
                    <p>{review.body}</p>
                    <br />
                    <strong>Rating: {review.rating}</strong>
                  </Link>
                </div>
            ))
        }

        

    </div>
  )
}
