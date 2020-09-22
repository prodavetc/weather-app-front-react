import React, { Component } from 'react'


export class ForecastPage extends Component {
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

                    const lista = repo.clima.list


                    return (<div key={i}>

                            <div><b>{repo.location.city}</b></div>
                            <div className="m5">
                                {lista.map((key, n) => (<div key={n}>Day {lista[n].dt_txt} -- temp {lista[n].main.temp}  </div>))}
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

        fetch(`/forecast/${id}`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {

                const body = data.map((repo,i) => {

                    const lista = repo.clima.list

                    return (<div key={i}>
                            <div><b>{repo.location.city}</b></div>
                            <div className="m5">
                                {lista.map((key, n) => (<div key={n}>Day {lista[n].dt_txt} -- temp {lista[n].main.temp}  </div>))}
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
                <h3>Forecast data :</h3>
                <form action="/forecast/" method="get" name="form" id="form" onSubmit={this.onSubmit}>
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