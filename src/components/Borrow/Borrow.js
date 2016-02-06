import React from 'react';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlight from 'autosuggest-highlight';
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
      value: '',
      suggestions: getSuggestions(''),
      teamMembers: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });

    console.log('Search changed');
  };

  onSuggestionsUpdateRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionSelected (event, { suggestion, suggestionValue, method }) {
    console.log(suggestion);
    console.log(suggestionValue);
    this.state.teamMembers.push(suggestion);
  }

  getTeamMembers () {
    var memberMarkup = this.state.teamMembers.map((member) => {
      var profilePicture = createProfileImage(member.img);

      return (
        <span key={member.name}>
          {profilePicture}
          <span>{member.name}</span>
        </span>
      );
    });

    return(
      <Row>
        <Col>
          {memberMarkup}
        </Col>
      </Row>
    );
  }

  render () {
    const inputProps = {
      placeholder: 'Search in your network',
      value: this.state.value,
      onChange: this.onChange
    };

    var teamMembers = this.getTeamMembers();

    return (
      <div className='container'>
        <h1>Borrow</h1>
        <p>Borrow with a group to reduce your interest rate.</p>

        <label>Enter the amount you wish to invest (CAD)</label>
        <input type='number' required />

        <label>Pick your group members</label>
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

        <button>Submit</button>
      </div>
    );
  }
}

export default Borrow;
