import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Card from '../Card/Card';
import UserDetailsCard from '../UserDetailsCard/UserDetailsCard';
import tournamentCard from '../TournamentCard/TournamentCard';
import { indicator, text, tab, underline, btn } from './styles';
import classNames from 'classnames';

import tourn1 from '../../assets/tourn1.jpg';
import tourn2 from '../../assets/tourn2.jpg';
import tourn3 from '../../assets/tourn3.jpg';
import ground1 from '../../assets/ground1.jpg';
import ground2 from '../../assets/ground2.jpg';
import ground3 from '../../assets/ground3.jpg';
export default class TournamentTab extends React.PureComponent {
  state = {
    value: 0,
  };

  clickHandler = value => {
    this.setState({ value });
  };
 TournamentCardResponse= {
   "data" :[{
     "Name": "Champions League",
     "Location": "Mumbai",
     "type": "Football",
     "image":tourn1
   },
   {
    "Name": "Adidas Premier League",
    "Location": "Delhi",
    "type": "Football",
    "image":tourn2
  },{
    "Name": "Times Pro League",
    "Location": "Vishakapatnam",
    "type": "Cricket",
    "image":tourn3
  }
  ]
 }

 GroundCardResponse= {
  "data" :[{
    "Name": "Astro World",
    "Location": "Mumbai",
    "type": "Football",
    "image":ground1
  },
  {
   "Name": "Triki-Taka",
   "Location": "Mumbai",
   "type": "Football",
   "image":ground2
 },{
   "Name": "Adidas- The Base",
   "Location": "Delhi",
   "type": "Football",
   "image":ground3
 }
 ]
}

 tournaments = () => {
   return (
    <div className={'d-flex flex-column w-100 align-items-center'}>
    <div style={{display : 'flex', justifyContent: 'space-between', width: '70%', marginLeft: '30px'}}>
      {
           this.state.value? this.GroundCardResponse.data.map((e,i)=>{return tournamentCard(e)}):this.TournamentCardResponse.data.map((e,i)=>{return tournamentCard(e)}) 
      }
    </div>
    <div className={'d-flex w-100 justify-content-center'} style={{color: 'white'}} >
    See All {this.state.value===0?'Tournaments':'Grounds'} >
    </div>
  </div>
   );
 }

  render() {
    return (
    <div style ={{width :'100%', paddingBottom:'20px', diaplay: 'flex', justifyContent: 'center', fontSize:'40px !important', backgroundColor:'#32a027'}}>
      <div className={tab}>
        <div className={'d-flex flex-column align-items-center p-3'}>
        {/* 0 is for tournaments */}
          <button className={classNames(text, btn)} onClick={()=>this.clickHandler(0)}>
            Tournaments
          </button>
          {
            this.state.value === 0 ?
            <div className={underline}></div>:
            <div className={underline} style={{backgroundColor:'#32a027'}}></div>
          }
        </div>
        <div className={'d-flex flex-column align-items-center p-3'}>
        {/* 1 is for grounds */}
          <button className={classNames(text, btn)} onClick={()=>this.clickHandler(1)}>
            Grounds
          </button>
          {
            this.state.value === 1 ?
            <div className={underline}></div>:
            <div className={underline} style={{backgroundColor:'#32a027'}}></div>
          }
        </div>
      </div>
      {this.tournaments()}
    </div>
    );
  }
}
