import React from 'react'

export default function About() {
  return (
   <>
    <div className="banner" id="home">
        <div className="container">
            <h1><span>BUYC</span></h1>
            <span className="cen">Buy cars of your choice at affordable price</span>
        </div>
    </div>

    
    <div className="about-section" id="about">
        <div className="container">
            <div className="content-section">
                <div className="title">
                    <h1>About</h1>
                </div>
                <div className="content">
                    <h3>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem vel sequi tenetur est, vero
                        labore beatae modi, exercitationem ipsam reprehenderit assumendar
                    </h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem architecto consequatur
                        nostrum nihil possimus tenetur, numquam accusamus libero. Dignissimos aliquid nobis ex ratione
                    </p>
                    <div className="button">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="social">
                    <a href=""><i className="fab fa-facebook-f"></i></a>
                    <a href=""><i className="fab fa-twitter"></i></a>
                    <a href=""><i className="fab fa-instagram"></i></a>
                    <a href=""><i className="fab fa-whatsapp"></i></a>
                </div>
            </div>
            <div className="image-section">
                <img src={require("../images/bg3.jpg")} alt="about"/>
            </div>
        </div>
    </div>

   </>
  )
}
