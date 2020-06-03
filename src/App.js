import React ,{Component} from 'react';
import Form from './components/Form.js'
import Weather from './components/Weather.js'

import './App.css';
const key='7dd4cb8f11cac005dc2695cefbeb0e43';
// http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=7dd4cb8f11cac005dc2695cefbeb0e43
class  App extends Component {
  state={
    tempreture:'',
    city:'',
    country:'',
    humidty:'',
    description:'',
    error:' '
  }
  getWeather= async (e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country= e.target.country.value;
     
    
      if(city && country) {
        const api = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&appid='+key);
        const data= await api.json();
        this.setState(
          {
            tempreture:data.main.temp,
            city:data.name,
            country:data.sys.country,
            humidty:data.main.humidty,
            description:data.weather[0].description,
            error:' '
          })
    }else{
      this.setState=({
        tempreture:'zero',
        city:'',
        country:'',
        humidty:'',
        description:'',
        error:'Enter City and Country'
      })
     

    }

      }
      
  render(){

    return (
      <div className="App">
        <Form getWeather={this.getWeather} />
        <Weather
        tempreture={this.state.tempreture}
        city={this.state.city}
        country={this.state.country}
        humidty={this.state.humidty}
        description={this.state.description}
        error= {this.state.error}
        />
      </div>
    );
  }
  
}

export default App;
