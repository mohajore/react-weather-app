import React, {Component} from 'react';


class Weather extends Component {
  render() {
    return (
      <div keys={this.props.key}>
        
        {
          this.props.temperature &&  [  
         <div className='info'> 
            <p className='info-key'>Temp  :
            <span  className='info-value'>{this.props.temperature}°C</span>
            </p>
            <p className='info-key'>City :
            <span  className='info-value'>{this.props.city}</span>
            </p>
            <p className='info-key'>Country :
            <span  className='info-value'>{this.props.country}</span>
            </p>
            <p className='info-key'>Humidity :
            <span  className='info-value'>{this.props.humidity}</span>
            </p>
            <p className='info-key'>Description :
            <span  className='info-value'>{this.props.description}</span>
            </p>
        
         </div>
          
          ]
          }
            <p className='info-key'>
            <span  className='info-value'>{this.props.error}</span>
            </p>
         
         
          
      </div>
    );
  }
}
export default Weather;