import React from 'react'

export default function Footer() {
  return (
    <>
    <div>


   
     <footer>
        <div className="footer">
            <div className="container">
                <div className="about">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum odio adipisci ad. Quaerat dolores
                        iure unde fugit repudiandae sint sunt libero doloremque autem, deserunt possimus in veritatis ad
                        enim et?</p>
                    <ul className="icons">
                        <li><a href=""><i className="fab fa-facebook-f" ></i></a></li>
                        <li><a href=""><i className="fab fa-twitter" ></i></a></li>
                        <li><a href=""><i className="fab fa-instagram" ></i></a></li>
                        <li><a href=""><i className="fab fa-whatsapp" ></i></a></li>
                    </ul>
                </div>
                <div className="quicklinks">
                    <h3>QuickLinks</h3>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="quicklinks">
                    <h3>Articles</h3>
                    <ul>
                        <li><a href="#">Recent Cars</a></li>
                        <li><a href="#">New Models</a></li>
                        <li><a href="#">High Mileage</a></li>
                        <li><a href="#">Low Price</a></li>
                    </ul>
                </div>
                <div className="footercontact">
                    <h3>Contact Us</h3>
                    <ul className="info">
                        <li>
                            <span><i className="fa-sharp fa-solid fa-location-dot"></i></span>
                            <span>D.No. 36-19-9
                                Kancharapalem, Vizag, India</span>
                        </li>
                        <li>
                            <span><i className="fa-solid fa-phone"></i></span>
                            <p><a href="#">8374178371</a></p>
                        </li>
                        <li>
                            <span><i className="fa-regular fa-envelope"></i></span>
                            <p><a href="#">info@buyc.com</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </div>
    </>
  )
}
