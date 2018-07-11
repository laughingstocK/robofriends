import React from 'react';

const Card = ({id , name , email}) => {
   return ( 
        <div className='bg-light-green dib br3 pr3 ma2 grow shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div className="tc">
                <p>{name}</p>
                <p>{email}</p>
            </div>
        </div>
          )
}


export default Card;