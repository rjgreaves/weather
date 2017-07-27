/**
 * Created by reube on 27/07/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    renderWeather(weatherData) {
        const name = weatherData.city.name;

        const temps = weatherData.list.map(weather => weather.main.temp);
        const pres = weatherData.list.map(weather => weather.main.pressure);
        const hum = weatherData.list.map(weather => weather.main.humidity);
        
        console.log(`dat:${JSON.stringify(dat)}`);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} colour="orange" />
                </td>
                <td>
                    <Chart data={pres} colour="blue" />
                </td>
                <td>
                    <Chart data={hum} colour="green" />
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);