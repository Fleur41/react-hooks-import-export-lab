import React from 'react';
import { currentTime } from '../data/user';
import { useState } from 'react';

function Time() {
   const[count, setCount] = useState(0)

    // this returns JSX!
    return (
      <div className="tweet">
        <img src="https://5.imimg.com/data5/SM/VB/MY-34406249/wall-clock-500x500.jpg" alt="tweet" className="tweet__avatar" />
        <div className="tweet__body">
          <p>We are writing this tweet in JSX. Holy moly!</p>
          <p onClick={() => setCount(count + 1)}>{count} retweets </p>
          <p className='time'>{currentTime}</p>
        </div>
      </div>
    );
}

export default Time