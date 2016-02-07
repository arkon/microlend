import React from 'react';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlight from 'autosuggest-highlight';
import ReactHighcharts from 'react-highcharts/bundle/highcharts';
import { Row, Col } from '../Grid/Grid';

const startingAPR = 0.082;
const startingMax = 200;

function calculateInterest(principal, interestRate){
  var compoundedPerYear = 12;
  var totalReturn = principal * Math.pow(( 1 + interestRate/compoundedPerYear )  ,compoundedPerYear * 1);
  return totalReturn - principal;
}

class Borrow extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      apr: startingAPR,
      maxPrincipal: startingMax,
      principal: startingMax
    };

    this.chartConfig = this.getChartConfig();
  }

  getChartConfig () {
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

  render () {
    return (
      <div className='container'>
        <div className='form form--wide'>
          <h1>Borrow</h1>

          <Row>
            <Col>
                <h3>Maximum Principal</h3>
                <div className='dashboard__list__title'>
                  ${this.state.maxPrincipal}
                </div>
            </Col>
            <Col>
              <h3>Effective APR</h3>
              <div className='dashboard__list__title'>
                {(this.state.apr * 100).toFixed(1)} %
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <ReactHighcharts config={this.chartConfig} />
            </Col>
          </Row>

          <label>Enter the amount you wish to borrow:</label>
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

          <Members />

          <button>Apply</button>
        </div>
      </div>
    );
  }
}

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

function renderSuggestion (suggestion, { value, valueBeforeUpDown }) {
  const suggestionText = suggestion.name;
  const query = (valueBeforeUpDown || value).trim();
  const matches = AutosuggestHighlight.match(suggestionText, query);
  const parts = AutosuggestHighlight.parse(suggestionText, matches);

  return (
    <span className='react-autosuggest__suggestion__content'>
      {createProfileImage(suggestion.img)}
      <span className='react-autosuggest__suggestion__content__name'>
        { parts.map((part, index) => {
          const className = part.highlight ? 'react-autosuggest__suggestion__content__name--highlight' : null;

          return (
            <span key={index} className={className}>{part.text}</span>
          );
        }) }
      </span>
    </span>
  );
}

class Members extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      autosuggestValue: '',
      suggestions: getSuggestions(''),
      teamMembers: []
    };
  }

  removeTeamMember (index) {
    var teamMembers = this.state.teamMembers;
    teamMembers.splice(index, 1);

    this.setState({
      teamMembers: teamMembers
    });
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
    this.state.teamMembers.push(suggestion);
    this.setState({
      autosuggestValue: ''
    });
  }

  getTeamMembers () {
    return (
      <ul className='autosuggest__selected'>
        { this.state.teamMembers.map((member, index) => {
          return (
            <li key={index}>
              <div className='autosuggest__selected__person'>
                {createProfileImage(member.img)}
                <span>{member.name}</span>
              </div>
              <i className='material-icons' onClick={this.removeTeamMember.bind(this, index)}>remove_circle_outline</i>
            </li>
          );
        }) }
      </ul>
    );
  }

  render () {
    const inputProps = {
      placeholder: 'Search in your network',
      value: this.state.autosuggestValue,
      onChange: this.onChange
    };

    return(
      <Row>
        <Col>
          <label>Pick your group members:</label>
          <small>Borrow with a group to reduce your interest rate.</small>

          <Autosuggest suggestions={this.state.suggestions}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
            onSuggestionSelected={this.onSuggestionSelected.bind(this)} />

          {this.getTeamMembers()}
        </Col>
      </Row>
    );
  }
}


export default Borrow;


