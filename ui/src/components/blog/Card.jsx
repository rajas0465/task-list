import React from "react"
import "./blog.css"
import { AiOutlineClockCircle } from "react-icons/ai"
// import { Link } from "react-router-dom"

export const Card = ({ posts }) => {
  return (
    <>
      <section className='blog'>
        <div className='container grid3'>
          {posts.map((item) => (
            <div className='box boxItems' key={item.id}>
              <div className='img'>
                <img src={item.image} alt='' />
              </div>
              <div className='details'>
                  <h1 className="BlogTitle">{item.title}</h1>

                <p className="description">{item.generated_blog_en.slice(0, 180)}...</p>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date_published}</label>
                  {/* <AiOutlineComment className='icon' /> <label htmlFor=''>27</label> */}
                  {/* <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
};
