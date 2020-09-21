import React, { Component } from 'react'

export class LocationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: <p>Loading...</p>
        };
    }

    componentDidMount() {

        fetch(`/location`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {

                const body = data.map((repo,i) => {
                    return <div key={i}>
                        <div>{repo.location.city} temp:{repo.clima.main.temp}</div>
                        <div>lon: {repo.clima.coord.lon}, lat:{repo.clima.coord.lat}</div>
                        <div>wind: {repo.clima.wind.speed} , humidity:{repo.clima.main.humidity}</div>

                    </div>
                });

                //
                this.setState({ body });
            })
            .catch(error => {
                console.log(error);
            })



    }

    render() {
        return (
            <div>
                <h3>Current location data:</h3>
                <div>
                    {this.state.body}
                </div>
            </div>
        )}
}