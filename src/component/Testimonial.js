import React from 'react'
import AnimatedBg from './AnimatedBg'
import Image1 from "../assets/images/2-small.png"
import Image2 from "../assets/images/10.png"
import Image3 from "../assets/images/12.png"
const Data = [
  {
    id: 1,
    description: "At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development",
    img:  Image1 ,
    name: "manishekher",
    post: "Frontend developer"
  },
  {
    id: 2,
    description: "At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development",
    img: Image2 ,
    name: "shyam",
    post: "Frontend developer"
  },
  {
    id: 3,
    description: "At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development",
    img:  Image3 ,
    name: "sunny",
    post: "Frontend developer"
  },
]

function Testimonial() {
  return (
    <>
      <AnimatedBg />
      <section className="home-testimonial">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center testimonial-pos">
            <div className="col-md-12 pt-4 d-flex justify-content-center">
              <h3>Testimonials</h3>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
              <h2>Explore My senior experience</h2>
            </div>
          </div>
          <section className="home-testimonial-bottom">
            <div className="container testimonial-inner">
              <div className="row">
                {Data.map((detail, id) => {
                  return (
                    <div className="col-md-4 style-3" key={id}>
                      <div className="tour-item ">
                        <div className="tour-desc">
                          <div className="tour-text color-grey-3 text-center">&ldquo;{detail.description}&rdquo;</div>
                          <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src={detail.img} alt="image" /></div>
                          <div className="link-name d-flex justify-content-center">{detail.name}</div>
                          <div className="link-position d-flex justify-content-center">{detail.post}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Testimonial