import React  from 'react';
const  Weather=(props)=> {
    console.log(props.error+"karem")
        return(
            <div>
                {
                    props.tempreture && <p>temp: {props.tempreture}</p>
                }
                {
                    props.city && <p>City: {props.city}</p>
                }
                {
                    props.country && <p>Country: {props.country}</p>
                }
                {
                    props.humidity && <p>Humidity: {props.humidity}</p>
                }
                {
                    props.description && <p>Description: {props.description}</p>
                }
                {
                    console.log(props.error)
                }
            </div>
        )


}
export default Weather;