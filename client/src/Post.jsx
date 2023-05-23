import React from 'react'

const Post = () => {
  return (
    <div className="post">
        <div className="image">
            <img src="../src/assets/pool.png" alt="" />
        </div>
        <div className="texts">
            <h2>getting started with react</h2>
            <p className="info">
                <a className="author">Salawu Ahmed</a>
                <time>2023-01-06 16:23</time>
            </p>
            <p className='summary'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis provident non facere, molestiae eius fugiat soluta praesentium totam modi debitis!
            </p>
        </div>
    </div>
  )
}

export default Post