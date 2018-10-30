import React from 'react';
import { Component } from 'react';

import corner from '../../assets/corner.png';
import profile from '../../assets/profile.png';
import news from '../../assets/news.png';

class About extends Component{
    constructor(props) {
        super(props);
        this.state = {
          screen: 0,
          image: [corner, profile, news, profile],
          description: ['Finding Local Grounds near you & Paticipate in the Live Tournaments ',
          'Showcases your sport stats & you past games at you profile page',
          'All the Sports News Content, Local & International',
          'Create your own Sports Network']
        }
        
      }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ screen: (this.state.screen+1)%4 }), 5000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
      }

      active = (i, text) => {
          if(this.state.screen === i) {
              return (
                <div style={{paddingTop:'15px' ,color:'#d18100', textDecoration: 'underline'}}>
                    {text}
                </div>
              );
          } else {
              return (
                <div style={{paddingTop:'15px' ,color:'black'}}>
                    {text}
                </div>
              );
          }
      }

      content = i => {
          switch(i) {
              case 0: return(this.active(
                        i,
                        'Find Local Grounds & Tournaments'
                        ));
              case 1: return(this.active(
                        i,
                        'Your Player Profile with verified stats & Trophies'
                        ));
              case 2: return(this.active(
                        i,
                        'Curated Sport News(Global & Local)'
                        ));
              case 3: return(this.active(
                        i,
                        'Sports Network for Players'
                        ));
          }
      }
 

    render(){
        return(
                <div style={{height:'600px' ,width :'100%', backgroundColor:'#ffffff' ,paddingLeft: '100px'}} id='about'>
                    <div style={{fontFamily: 'Helvetica Neue',fontSize: '30px', color: '#000000',fontWeight: 'bold', paddingTop:'20px', display:'flex'}}>
                        About Goplaybook
                    </div>
                    <div style={{paddingTop:'10px',color: '#000000', fontWeight: '500', fontFamily: 'Roboto',fontSize: '20px', display:'flex'}}>
                    We are a mobile app platform which helps emerging young player to meet with opportunity  & Recognition
                    </div>
                    
                    <div style={{display:'flex', width: '100%'}}>
                    <div style={{paddingTop:'40px' , color:'black', width:'100%'}}>
                        <div style={{fontWeight:'bold', display:'flex'}}>Key Features</div>
                        <div> 
                            <div style={{display:'flex'}}>{this.content(0)}</div>
                            <div style={{display:'flex'}}>{this.content(1)}</div>
                            <div style={{display:'flex'}}>{this.content(2)}</div>
                            <div style={{display:'flex'}}>{this.content(3)}</div>
                            <div style={{backgroundColor:'#eaebec' , color:'black',marginTop: '150px', borderRadius:'70px'}}>
                                <div className={'d-flex w-50 p-4'} style={{display:'flex' ,flexWrap: 'wrap', height:'140px', justifyContent: 'center', alignItems: 'center'}}>
                                    {this.state.description[this.state.screen]}
                                </div>
                            </div>
                            <div className={'d-flex w-100 justify-content-end'} style={{marginTop: '-447px'}}>
                            <img src={`${this.state.image[this.state.screen]}`} style = {{width:'560px' ,height:'500px'}}/>
                            </div>
                        </div>              
                    </div>
                    </div>
                </div>
        );
    }
}

export default About;