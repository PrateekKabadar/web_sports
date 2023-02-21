import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';


const Pricing = () => {
    return (
        <div>
            <Navbar />
            <section className="price">
                <h1 className="heading-section">
                    Pricing and Membership
                </h1>
                <p className="price-paragraph">
                  We provide the ultimate training experience in all these sports.
                </p>
                <section className="price-box">
                    <article className="individual__price">
                        <h1 className="price-heading"> ₹9999 <small>/3 months</small></h1>
                        <div className="paragraph card-paragraph">
                            <span className="mini-desc">Cricket </span><br/><small> For all those who want to be expert in the Cricket.</small>
                            <strong className="mini-desc">What you get : </strong>
                            <ul className="individual__list">
                                <li className="individual__item">Cricket Kit</li>
                                <li className="individual__item">Batting training</li>
                                <li className="individual__item">Balling training</li>
                                <li className="individual__item">Wicket keeping training</li>
                                <li className="individual__item">Fielding </li>
                            </ul>
                        </div>
                    </article>
                    <article className="individual__price">
                        <h1 className="price-heading"> ₹7999 <small>/3 months</small></h1>
                        <div className="paragraph card-paragraph">
                            <span className="mini-desc">Football</span><br/> <small>For all those who want to be expert in the Football.</small>
                            <strong className="mini-desc">What you get : </strong>
                            <ul className="individual__list">
                                <li className="individual__item">Shooting drills</li>
                                <li className="individual__item">Aerobic training</li>
                                <li className="individual__item">Goal keeping </li>
                                <li className="individual__item">Dribbling technique</li>
                                
                            </ul>
                        </div>
                    </article>
                    <article className="individual__price">
                        <h1 className="price-heading"> ₹6999 <small>/3 months</small></h1>
                        <div className="paragraph card-paragraph">
                            <span className="mini-desc">Basketball</span> <br/> <small>For all those who want to be expert in the Basketball.</small>
                            <strong className="mini-desc">What you get : </strong>
                            <ul className="individual__list">

                                <li className="individual__item">Shooting drills</li>
                                <li className="individual__item">Lay Ups & Finishing</li>
                                <li className="individual__item">Personal Trainer</li>
                                <li className="individual__item">Passing drills</li>
                                <li className="individual__item">Dribbling drills</li>
                            </ul>
                        </div>
                    </article>
                    <article className="individual__price">
                        <h1 className="price-heading"> ₹4999 <small>/3 months</small></h1>
                        <div className="paragraph card-paragraph">
                            <span className="mini-desc">Volleyball</span> <br/> <small>For all those who want to be expert in the Volleyball.</small>
                            <strong className="mini-desc">What you get : </strong>
                            <ul className="individual__list">

                                <li className="individual__item">Physical fitness training</li>
                                <li className="individual__item">Serveing</li>
                                <li className="individual__item">Training on power hits</li>
                                <li className="individual__item">Dynamic position shifting</li>
                                
                            </ul>
                        </div>
                    </article>


                </section>
            </section>
            <Footer />
        </div>
    )
}

export default Pricing
