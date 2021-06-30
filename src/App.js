import React, {Component} from 'react';
import './App.css';
import Form from './Component/Form';
import Weather from './Component/Wather';





const API_KEY  = "d7d025d329be99cbcb59a33fd66c023d"
// http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {

  state ={
    
    temperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:'',
  }

getWeather = async (e)=>{
  e.preventDefault();
  // console.log("weather");
  const city = e.target.elements.city.value
  const country = e.target.elements.country.value
  const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`)
  const data = await api.json()
  console.log(data);
 if(city && country){
  this.setState({
    temperature:Math.round((data.main.temp)-273.15),
    city:data.name,
    country:data.sys.country,
    humidity:data.main.humidity,
    description:data.weather[0].description,
    
  })
 }else if(city || country){ this.setState({
  temperature:'',
  city:'',
  country:'',
  humidity:'',
  description:'',
  error:'Please enter full information',
 })

 }else{ this.setState({
  temperature:'',
  city:'',
  country:'',
  humidity:'',
  description:'',
   error:'Please enter the city and the country',
})}
}

  render() {
    return (
      <div  className="wrapper id="gradient>
        <div className="form-container">
            <Form getWeather={this.getWeather}/>
            <Weather  
             temperature={this.state.temperature}
             city={this.state.city}
             country={this.state.country}
             humidity={this.state.humidity}
             description={this.state.description}
             error={this.state.error}
            />
        </div>
      </div>
    );
  }
}
export default App;