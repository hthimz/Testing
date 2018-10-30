import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { boxShadow } from './styles'
import classNames from 'classnames';
import location from '../../assets/location.png';
import cricket from '../../assets/cricket.png';
import football from '../../assets/football.png';

let src;

const CardExampleCard = (obj,type=1) => {
src = obj.type.toLowerCase()==='cricket'? cricket : football
    return (
    <Card style={{borderRadius: '12px', height: '311px', width: '270px'}} className={classNames(boxShadow, 'my-5')}>
        <Image src={obj.image} style={{width: '100%',height:'200px', borderTopLeftRadius:'12px',borderTopRightRadius:'12px'}}/>
        <div style = {{paddingLeft:'16px',display:'flex'}}>
            <Card.Content>
            <Card.Header style={{fontFamily: 'Montserrat',fontWeight:'600', marginTop: '16px',letterSpacing: 'normal'}}>{obj.Name}</Card.Header>
                <div>
                    <div className={'d-flex mt-1'}>
                    {type===1&&<div><img src={location} style={{height: '17px', width:'12px'}}/></div>}
                        <div><Card.Description className={'d-flex align-items-center'} style={{fontFamily: 'Montserrat', color: '#565555', paddingLeft:'15px', fontSize:'0.8rem', height:'23px'}}>{obj.Location}</Card.Description></div>
                    </div>
                    <div style={{display :'flex'}}>
                    {type===1&&<div><img src={src} style={{height: '14px', width:'14px'}}/></div>}
                        <div className={'d-flex align-items-center'} style={{fontFamily: 'Montserrat', color: '#565555', paddingLeft:'15px', fontSize:'0.8rem', height:'23px'}}><Card.Description>{obj.type}</Card.Description></div>
                    </div>
                </div>
            </Card.Content>
        </div>
    </Card>
    );
}


export default CardExampleCard