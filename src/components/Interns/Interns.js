import React from 'react'
import Card from '../CareersCard/Card' ;

import python from '../../assets/internPython.png';
import android from '../../assets/internAndroid.png';
import ios from '../../assets/internIos.png';
import marketing from '../../assets/internMarketing.png';
import react from '../../assets/internReact.png';
class Interns extends React.PureComponent { 
    
response= {
    "data":[{
            "Image" :python,
            "Text" :"Backend Intern",
            "Link" : 'https://docs.google.com/forms/d/1vvbFMxgxYPDR5XSWyC-wUTtVAF7VVodQ-lOS_faimb0',
            },{
            "Image" :android,
            "Text" :"Android Intern",
            "Link":"https://docs.google.com/forms/d/1V3ot8fdrnPy1lJjqhjq7BFYe3qcfI_T2dC4oKWKtPow",
            },
            {
            "Image" :ios,
            "Text" :"iOS Intern",
            "Link":"https://docs.google.com/forms/d/1G9Xrj1rVa5CciZJMnzvuMTXCgiAahEa3nDOVMJmz7YA"
            },
            {
            "Image" :marketing,
            "Text" :"Digital Marketing",
            "Link":"https://docs.google.com/forms/d/1Z26PhyhdHuWS1mKyvnk_jR5pNugAFt5gXoYB-cFj5e8"
            },{
            "Image" :react,
            "Text" :"React/React Native Developer",
            "Link":"https://docs.google.com/forms/d/1HB0LZbT5VHX6phHJgy4lX5Ln44X3YFQHPyQngxTIgeA/"
            }
        ]
}

imageInjector = () => {
    let table = [];
    let n=4;
    // Outer loop to create parent
    for (let i = 0; i < (n+2)/3; i++) {
        let children = []
        //Inner loop to create children
        for (let j = 0; j < 3 && this.response.data[3*i+j]!==undefined; j++) {
          children.push(<td style={{margin:'50px'}}><Card Image={this.response.data[3*i+j].Image} Text={this.response.data[3*i+j].Text} Link={this.response.data[3*i+j].Link} /></td>)
        }
        //Create the parent and add the children
        table.push(<tr style={{display:'flex', justifyContent: 'start',width:'80%',height :'350px'}}>{children}</tr>)
      }
      return table;
}

    render() {
    return (
    <div>
        <div className={'d-flex flex-column align-items-center'}>
            {this.imageInjector()}
        </div>
    </div>
    );
    }
}

export default Interns;