const React = require('react');

class Show extends React.Component {
    render() {
        const flight = this.props.flight;
        
        return (
            <div>
                <h1>
                    Airline: {flight.airline}<br/>
                    Flight Number: {flight.flightNo}<br/>
                    Departure Date: {flight.departs.toISOString().slice(0, 16) }<br/>
                    Airport: {flight.airport}<br/>      
                </h1>
                <h1>
                    {/* <u>Destinations</u><br/>  
                        Airport: {destination.airport}<br/>    
                        Arrival Date: {destination.arrival}<br/>    */}
                </h1>
                <h3>
                    <u>Add Destination</u><br/>   
                        <form action={this.props.flight.id} method="POST">
                            Airport: 
                                <select name="airport">
                                    <option>AUS</option>
                                    <option>DAL</option>
                                    <option>LAX</option>
                                    <option>SAN</option>
                                    <option>SEA</option>
                                </select><br/>
                            Arrival Date: <input type="datetime-local" name="arrival" /><br/>
                        <input type="submit" value="Create Destination"/>
                        </form>               
                </h3>
                <a href="/flight"> back </a>
            </div>
        );
    }
}

module.exports = Show;