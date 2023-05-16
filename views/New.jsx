const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>New Flight page</h1>
            <form action="/flight" method="POST">
                airline: 
                    <select name="airline">
                        <option>American</option>
                        <option>Southwest</option>
                        <option>United</option>
                    </select><br/>
                flightNo: <input type="number" min="0" max="9999" name="flightNo" /><br/>
                departs: <input type="datetime-local" name="departs" /><br/>
                airport: 
                    <select name="airport">
                        <option>AUS</option>
                        <option>DAL</option>
                        <option>LAX</option>
                        <option>SAN</option>
                        <option>SEA</option>
                    </select><br/>
            <input type="submit" name="" value="Create Flight"/>
            </form>
            <a href="/flight"> back </a>
        </div>);
    }
  }

module.exports = New;