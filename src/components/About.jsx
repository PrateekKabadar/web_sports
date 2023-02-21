import React, {useState, useContext} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {TrainerContext} from '../context/TrainerContext'
import vid from '../assets/180419_Boxing_A1_04.mp4';
import ExpertCard from './ExpertCard';

const About = () => {
    const [...trainers] = useContext(TrainerContext);
    const [gym] = useState(trainers.filter(item => item.type==='spo'));
    
    return (
        <main>
            <Navbar />
            <div className="about-page">
                <video autoPlay playsInline muted loop className="about-page-hero">
                    <source src={vid} type="video/mp4"/>
                </video>
                <div className="about-content">
                    <section className="about-section">
                        <h1 className="about-heading">About Us</h1>
                        <p className="about-paragraph">
                        We are a team of highly experienced individuals in the field of Sports and Technology. We have seen operations of sports organizations very closely and understand the pain suffered by everyone involved in their management.
                        </p>
                        <p className="about-paragraph">
                        We aim to assist Sports organizations with next-gen cutting edge technology solutions to bring efficiency and excellence in their operations and elevate the way they measure and track the performance of the athletes.
                        </p>
                       
                    </section>
                   
                    <section className="about-section">
                        <h1 className="about-heading">Coachs</h1>
                        <p className="about-paragraph">
                            With the best Coachs across the country in our team, we guarantee you a better skills. 
                            Let's meet our team of <strong>Gold Sports Club Coachs </strong>
                        </p>
                        <div className="flexy">
                            {gym.map(item => 
                                <ExpertCard key={item.id}
                                    name={item.name}
                                    img={item.pic}
                                    qualification={item.qualification}
                                    experience={item.experience}
                                    gender = {item.gender}
                                    item = {item.gender}
                                    slug = {item.slug}
                            />)}
                        </div>
                    </section>
                </div>
            </div>
           <Footer />
        </main>
    )
}

export default About
