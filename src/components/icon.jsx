import { WeatherSvg } from "weather-icons-animated";

const Icon = (props) => {
    const weather = props.weather;
  return (
    <div className="flex items-center justify-center mt-[2px]">
              {
                weather === 'Clouds'? 
                <div className="text-center">
                <WeatherSvg state="cloudy" className="w-[8rem]"/></div>:null
              }
              {
                weather === 'Clear'? 
                <div className="text-center">
                <WeatherSvg state="sunny" className="w-[8rem]"/></div>:null
              }
              {
                weather === 'Rain'? 
                <div className="text-center">
                <WeatherSvg state="rainy" className="w-[8rem]"/></div>:null
              }
              {
                weather === 'Wind'? 
                <div className="text-center">
                <WeatherSvg state="windy" className="w-[8rem]"/></div>:null
              }
              {
                weather === 'Snow'? 
                <div className="text-center">
                <WeatherSvg state="snowy" className="w-[8rem]"/></div>:null
              }
              {
                weather === 'Haze'? 
                <div className="text-center">
                <WeatherSvg state="fog" className="w-[8rem]"/></div>:null
              }
          </div>
  )
}

export default Icon;
