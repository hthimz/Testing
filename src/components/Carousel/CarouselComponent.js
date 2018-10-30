import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from '../Card/Card';
import {header} from './styles';

import avijeet from '../../assets/avijeet.png';
import hero from '../../assets/hero.png';
import anupam from '../../assets/anupam.png';
import praveen from '../../assets/praveen.png';
import rashid from '../../assets/rashid.png';
import ca from '../../assets/ca.png';
import ajeet from '../../assets/ajeet.png';
import laksh from '../../assets/laksh.png';

export default class CarouselComponent extends Component {
    response ={
        "data": [
        {
        "Name": "Avijeet Singh Gumber",
        "Designation": "CEO,GoPlayBook",
        "SportsType": "Football & Cricket",
        "image" : avijeet
        },
        {
        "Name": "Himanshu Tomar",
        "Designation": "Full stack Developer",
        "SportsType": "Basketball",
        "image" : hero
        },
        {
        "Name": "Anupam Pareek",
        "Designation": "Product Manager",
        "SportsType": "Football",
        "image":anupam
            },
        // ,
    ]
    }
    response1 ={
        "data" : [
            {
                "Name": "Praveen Verma",
                "Designation": "Lead Android Developer",
                "SportsType": "Cricket",
                "image" :praveen
                        },
                {
                "Name": "Rashid Abdul Rahiman",
                "Designation": "Digital Marketing Manager",
                "SportsType": "Football",
                "image" : rashid
                    },
                {
                "Name": "Gautam Kapoor",
                "Designation": "Financial Keeper",
                "SportsType": "Football",
                "image" :ca
                    }
        ]
    }

    response2 ={
        "data" : [
            {
                "Name": "Ajeet Chaudhary",
                "Designation": "Community Manager (Cricket)",
                "SportsType": "Cricket",
                "image" :ajeet
                        },
                {
                "Name": "Laksh Rajpal",
                "Designation": "Community Manager (Football)",
                "SportsType": "Football",
                "image":laksh

                    }
        ]
    }
    
    slider = (i) =>{
        switch (i){
            case 1: return (
                <div style={{display:'flex', justifyContent: 'space-around', backgroundColor:'#32a027'}} className={"px-5 pb-5"}>
                {
                this.response.data.map(e=>
                    <Card Name= {e.Name} Designation={e.Designation}  SportsType={e.SportsType} image={e.image}/>)
                }
            </div>
            );
            case 2: return (
                <div style={{display:'flex', justifyContent: 'space-around', backgroundColor:'#32a027'}} className={"px-5 pb-5"}>
                {
                this.response1.data.map(e=>
                    <Card Name= {e.Name} Designation={e.Designation}  SportsType={e.SportsType} image={e.image}/>)
                }
            </div>
            );
            case 3: return (
                <div style={{display:'flex', justifyContent: 'space-around', backgroundColor:'#32a027'}} className={"px-5 pb-5"}>
                {
                this.response2.data.map(e=>
                    <Card Name= {e.Name} Designation={e.Designation}  SportsType={e.SportsType} image={e.image}/>)
                }
            </div>
            );
        }
    }

    render() {
        return (
            <div style={{background: '#32a027'}}>
                <div style={{display :'flex',fontSize: '26px',fontWeight: 'bold', fontFamily:'Helvetica Neue', marginLeft:'100px', marginTop:'66px', paddingTop: '30px', color:'white'}}>
                    GoPlayBook Team
                </div>
                <div style={{display:'flex', paddingTop: '10px', color:'white'}}>
                    <div className={header}>The Reason why GoPlayBook exists today.</div>
                </div>
                    <Carousel
                        autoPlay
                        infiniteLoop
                        interval={3000}
                        showArrows={true}
                        showStatus={true}
                        showThumbs={false}
                    >
                        {this.slider(1)}
                        {this.slider(2)}
                        {this.slider(3)}
                    </Carousel>
            </div>
        );
    }
}
