const React = require('react');

class Index extends React.Component {
    render() {      
        return (
            <div>
                <ul>
                    {this.props.flight.map((flight, x) => {
                        return(
                                <li>
                                    Airline: {flight.airline}<br/>
                                    Flight Number: {flight.flightNo}<br/>
                                    Departure Date: {flight.departs.toISOString().slice(0, 16) }<br/>
                                    Airport: {flight.airport}<br/>   
                                    <a href={`/flight/${flight.id}`}>Details</a>                  
                                </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href="/flight/new">Create a New flight</a>
                </nav>
                <a href="/"> back </a>
            </div>
        );
    }
}

module.exports = Index;