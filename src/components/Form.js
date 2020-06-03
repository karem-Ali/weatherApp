import React  from 'react';
const  Form =(props)=>{
    return(
        <form onSubmit= {props.getWeather}>
            <input type="text" name='city' />
            <input type="text" name='country' />
            <button> getWeather</button>

        </form>
    )

}
export default Form ;