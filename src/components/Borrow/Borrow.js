import React from 'react';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlight from 'autosuggest-highlight';
import ReactHighcharts from 'react-highcharts/bundle/highcharts';
import { Row, Col } from '../Grid/Grid';

const friends = [
  {
    name: 'Eugene Cheung',
    img: 'eugene.jpg'
  },
  {
    name: 'Peter Newhook',
    img:'peter.png'
  },
  {
    name: 'Spencer Elliott',
    img: 'spencer.jpg'
  },
  {
    name: 'Stephanie Sutanto',
    img: 'stephanie.jpg'
  }
];

const startingAPR = 0.082;
const startingMax = 200;

function getSuggestions (value) {
  const inputValue = value.trim().toLowerCase();

  return value.length === 0 ? [] : friends.filter(person =>
    person.name.toLowerCase().indexOf(inputValue) !== -1
  );
}

function getSuggestionValue (suggestion) {
  return suggestion.name;
}

function createProfileImage (fileName) {
  return <img className='react-autosuggest__suggestion__content__photo' src={`/img/users/${fileName}`} />
}

function calculateInterest(principal, interestRate){
  var compoundedPerYear = 12;
  var totalReturn = principal * Math.pow(( 1 + interestRate/compoundedPerYear )  ,compoundedPerYear * 1);
  return totalReturn - principal;
}

function renderSuggestion (suggestion, { value, valueBeforeUpDown }) {
  const suggestionText = suggestion.name;
  const query = (valueBeforeUpDown || value).trim();
  const matches = AutosuggestHighlight.match(suggestionText, query);
  const parts = AutosuggestHighlight.parse(suggestionText, matches);

  var profilePicture = createProfileImage(suggestion.img);

  return (
    <span className='react-autosuggest__suggestion__content'>
      {profilePicture}
      <span className='react-autosuggest__suggestion__content__name'>
        { parts.map((part, index) => {
          const className = part.highlight ? 'react-autosuggest__suggestion__content__name--highlight' : null;

          return (
            <span className={className} key={index}>{part.text}</span>
          );
        }) }
      </span>
    </span>
  );
}

class Borrow extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      autosuggestValue: '',
      suggestions: getSuggestions(''),
      teamMembers: [],
      apr: startingAPR,
      maxPrincipal: startingMax,
      principal: startingMax
    };

    this.chartConfig = this.getChartConfig();
  }

  getChartConfig(){

    var principalAmounts = [this.state.principal, this.state.principal, this.state.principal];

    // Microlend, credit card, Payday loan
    var interestRates = [this.state.apr, 0.21, 0.4];
    var interestAmounts = [];

    for (var i = 0; i < interestRates.length; i++) {
      interestAmounts[i] = calculateInterest(this.state.principal, interestRates[i]);
    };

    var config = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Rate Comparison'
      },
      xAxis: {
        categories: ['Microlend', 'Credit Card', 'Payday Loan']
      },
      plotOptions: {
        column: {
          stacking: 'normal'
        }
      },
      series: [
        {
          name:'Interest',
          data:interestAmounts
        },
        {
          name:'Principal',
          data: principalAmounts
        }
      ]
    };

    return config;
  }

  onChange = (event, { newValue }) => {
    this.setState({
      autosuggestValue: newValue
    });

    console.log('Search changed');
  };

  onSuggestionsUpdateRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionSelected (event, { suggestion, suggestionValue, method }) {
    this.setState({autosuggestValue: ''});
    this.state.teamMembers.push(suggestion);
  }

  getTeamMembers () {
    return (
      <Row>
        <Col>
          { this.state.teamMembers.map((member, index) => {
            return (
              <span key={index}>
                {createProfileImage(member.img)}
                <span>{member.name}</span>
              </span>
            );
          }) }
        </Col>
      </Row>
    );
  }

  render () {
    const inputProps = {
      placeholder: 'Search in your network',
      value: this.state.autosuggestValue,
      onChange: this.onChange
    };

    var teamMembers = this.getTeamMembers();

    return (
      <div className='container'>
        <div className='form form--wide'>
          <h1>Borrow</h1>

          <Row>
            <Col>
                <h3>Maximum Principal</h3>
                <div>
                  ${this.state.maxPrincipal}
                </div>
            </Col>
            <Col>
              <h3>Effective APR</h3>
              <div>
                {this.state.apr} %
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <ReactHighcharts config={this.chartConfig} />
            </Col>
          </Row>

          <label>Enter the amount you wish to invest:</label>
          <input type='number' required value={this.state.principal} />

          <label>Select loan purpose:</label>
          <select>
            <option>Choose one...</option>
            <option>Pay off credit card bills</option>
            <option>Buy a car</option>
            <option>Home renovations</option>
            <option>School</option>
            <option>Pay for my wedding</option>
            <option>Start a business</option>
            <option>Something else</option>
          </select>

          <label>Pick your group members:</label>
          <small>Borrow with a group to reduce your interest rate.</small>
          <Row>
            <Col>
              <Autosuggest suggestions={this.state.suggestions}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
                onSuggestionSelected={this.onSuggestionSelected.bind(this)}
              />
            </Col>
          </Row>

          {teamMembers}
          <Row>
            <Col>
              <table>
                <tbody>
                  <tr>

                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>

          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default Borrow;
