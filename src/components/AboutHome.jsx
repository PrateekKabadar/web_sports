import React from 'react'
// import {TrainerContext} from '../context/TrainerContext';

import {GiCricketBat,GiSoccerField,GiBasketballBasket,GiVolleyballBall} from 'react-icons/gi';

const AboutHome = () => {
    // const value  = React.useContext(TrainerContext);
    return (
        <section className="about-home">
            <h1 className="about-home__heading">who are we</h1> 
            <p className="about-home__block">
                <span className="lead">We</span>, at Gold Sports Club are <strong>the most effective sports club</strong> in the country.We, at Gold Sports Club, believe in developing interest in a particular sport or physical activity. Our focus is to help you guide you to a better life style. We focus on cricket, football, volleyball and basketball . Our coachs are there to help you whenever you need. They will guide you, mentor you, motivate you and help you become the best YOU. 
            </p>
            <h1 className="about-home__heading about-home__heading--sub">
                Our Goal
            </h1>
            <p className="about-home__block">
            We at Gold sports club help you to learn and improve your performance at sports.Sports clubs do not strive for maximum profit. They aim to offer their members the opportunity to practise sport and to pass leisure time actively.Our club focuses on competitive sports, mass sports and sociability. 
    
            </p>
            <div className="about-home-flex">
                <div className="about-home__sub-block">
                    <GiCricketBat  className="home-icon"/>
                    <div className="sub-block-text">
                        <h4 className="mini-heading">CRICKET</h4>
                        <p className="muted-paragraph">
                        Cricket is a sport that requires the use of a bat and ball. It is easily one of the most prevalent sports in the world. This game consists of two teams that include 11 players each. The main aim of the game is to score the highest number of runs.
                        </p>
                    </div>
                </div>
                <div className="about-home__sub-block">
                    <GiSoccerField className="home-icon" />
                    <div className="sub-block-text">
                        <h4 className="mini-heading">FOOTBALL</h4>
                        <p className="muted-paragraph">
                        Football, also called association football or soccer, is a game involving two teams of 11 players who try to maneuver the ball into the other team's goal without using their hands or arms. The team that scores more goals wins. Football is the world's most popular ball game in numbers of participants and spectators. 
                        </p>
                    </div>
                </div>
                <div className="about-home__sub-block">
                    <GiBasketballBasket className="home-icon" />
                    <div className="sub-block-text">
                        <h4 className="mini-heading">BASKETBALL</h4>
                        <p className="muted-paragraph">Basketball is a crew sport, where there are two teams of five players each. The game is also commonly referred to as hoops. The teams face each other in a court, which is rectangular. The main objective of the game is to score by shooting the ball to the opponent's basket or hoop.
                        </p>
                    </div>
                </div>
                <div className="about-home__sub-block">
                   <GiVolleyballBall className="home-icon" />
                    <div className="sub-block-text">
                        <h4 className="mini-heading">VOLLEYBALL</h4>
                        <p className="muted-paragraph">
                        Volleyball, game played by two teams, usually of six players on a side, in which the players use their hands to bat a ball back and forth over a high net, trying to make the ball touch the court within the opponents' playing area before it can be returned.
                        </p>
                    </div>
                </div>

            </div>
        
        </section> 
    )
}

export default AboutHome


