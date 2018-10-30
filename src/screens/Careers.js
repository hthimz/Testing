import React from 'react';
import CareersCard from '../components/CareersCard/CareersCard';
import CareerBanner from '../components/CareerBanner/CareerBanner';
import Interns from '../components/Interns/Interns'; 
import Footer from '../components/Footer/Footer';

class LandingPage extends React.Component {
  render() {
    return (
        <div>
            <CareerBanner/>
            <div style={{borderBottomColor:'black', borderBottomWidth: '10px', paddingTop:'90px', fontSize :'34px', color: '#1b1e20'}}>Full-Time Opportunities</div>
            <div><CareersCard /></div>
            <div style= {{paddingTop:'150px'}}><Footer /></div>
        </div>
        );
        }
}

export default LandingPage;
