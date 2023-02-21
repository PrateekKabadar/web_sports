import t1 from '../assets/trainer1.jpg';
import t2 from '../assets/trainer2.jpg';
import t3 from '../assets/trainer3.jpg';
import t4 from '../assets/trainer4.jpg';
import t5 from '../assets/trainer5.jpg';
import t10 from '../assets/r7.jpg';

import React, { useState, createContext } from 'react'

export const TrainerContext = createContext();

const TrainerContextProvider = (props) => {
    const trainer_data = [
        {
            id: 1,
            name: 'Vikram rathour ',
            gender: `male`,
            pic: t1,
            type: 'spo',
            qualification: 'Batting Coach',
            experience: 20,
            slug: 'Vikram'  
         },
        {
            id: 2,
            name: 'Paras Mhambrey',
            gender: `male`,
            pic: t2,
            type: 'spo',
            qualification: 'Balling Coach',
            experience: 18,
            slug: 'Paras'  
       },
        {
            id: 3,
            name: 'Igor Štimac',
            gender: `male`,
            pic: t3,
            type: 'spo',
            qualification: 'Football Head Coach',
            experience: 13,
            slug: 'Igor'        
        },
        {
            id: 4,
            name: 'Satnam Singh',
            gender: `male`,
            pic: t4,
            type: 'spo',
            qualification: 'Basketball Coach',
            experience: 15,
            slug: 'Satnam'        
        },
        {
            id: 5,
            name: 'Veselin Matić',
            gender: `male`,
            pic: t5,
            type: 'spo',
            qualification: 'Basketball Head Coach',
            experience: 25,
            slug: 'Veselin'        
        },
    
        {
            id: 10,
            name: 'Shyam Sunder Rao',
            gender: `male`,
            pic: t10,
            type: 'spo',
            qualification: 'Volleyball Head Coach',
            experience: 20,
            slug:'Shyam'
        }
    ]

    const [trainers] = useState(trainer_data);

    return (
        <TrainerContext.Provider value={[...trainers]}>
            {props.children}
        </TrainerContext.Provider>
    )
}

export default TrainerContextProvider

