import React, { Component } from 'react'


export class CurrentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

            body: <p>Loading...</p>
        }

    }

    componentDidMount() {

        const id = (window.location.pathname) || ''
        fetch(`${id}`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {

                const body = data.map((repo,i) => {
                    const imgStatus = '//openweathermap.org/img/wn/' + repo.clima.weather[0].icon + '.png'
                    return (<div key={i}>

                            <div><b>{repo.location.city}</b> temp:{repo.clima.main.temp} <img src={imgStatus} /></div>
                            <div>
                                <div>lon: {repo.clima.coord.lon}, lat:{repo.clima.coord.lat}</div>
                                <div>wind: {repo.clima.wind.speed} , humidity:{repo.clima.main.humidity}</div>
                            </div>

                        </div>
                    )
                });

                this.setState({ body })
            })
            .catch(error => {
                console.log(error)
            })



    }

    onSubmit = (e) => {

        e.preventDefault()

        const id = e.target.id.value || ''
        fetch(`/current/${id}`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {

                const body = data.map((repo,i) => {
                    const imgStatus = '//openweathermap.org/img/wn/' + repo.clima.weather[0].icon + '.png'
                    return (<div key={i}>
                            <div><b>{repo.location.city}</b> temp:{repo.clima.main.temp} <img src={imgStatus} /></div>
                            <div>
                                <div>lon: {repo.clima.coord.lon}, lat:{repo.clima.coord.lat}</div>
                                <div>wind: {repo.clima.wind.speed} , humidity:{repo.clima.main.humidity}</div>
                            </div>
                        </div>
                    )
                });

                this.setState({ body })
            })
            .catch(error => {
                console.log(error)
            })


    }

    render() {

        return (
            <div>
                <h3>Current data :</h3>
                <form action="/current/" method="get" name="form" id="form" onSubmit={this.onSubmit}>
                    <div>
                        <input type="text" name="id" id="id" />
                        <input type="submit" value="go" />
                    </div>
                </form>
                <div>
                    {this.state.body}
                </div>
            </div>
        )}
}