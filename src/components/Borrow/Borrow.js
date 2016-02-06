import React from 'react';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlight from 'autosuggest-highlight';

const friends = [
  {
    name: 'Eugene Chung',
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

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();

  return value.length === 0 ? [] : friends.filter(person =>
    person.name.toLowerCase().indexOf(inputValue) !== -1
  );
}

function getSuggestionValue(suggestion){
  return suggestion.name;
}

function renderSuggestion(suggestion, { value, valueBeforeUpDown }){

  const suggestionText = suggestion.name;
  const query = (valueBeforeUpDown || value).trim();
  const matches = AutosuggestHighlight.match(suggestionText, query);
  const parts = AutosuggestHighlight.parse(suggestionText, matches);

  const profileImage = '/img/users/' + suggestion.img;

  return (<span className='suggestion-content'>
    <img className='profile-image' src={profileImage} />
    <span className="name">
      {
        parts.map((part, index) => {
          const className = part.highlight ? 'highlight' : null;

          return (
            <span className={className} key={index}>{part.text}</span>
          );
        })
      }
    </span>
  </span>);
}

class Borrow extends React.Component {

  constructor(){
    super();

    this.state = {
      value:'',
      suggestions: getSuggestions('')
    };


  }

  onChange = (event, { newValue }) => {
    this.setState({value: newValue});
    console.log('Search changed');
  };

  onSuggestionsUpdateRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionSelected(event, { suggestion, suggestionValue, method }){
    console.log(suggestion);
    console.log(suggestionValue);
  }

  render () {

    const inputProps = {
      placeholder: 'Search in your network',
      value: this.state.value,
      onChange: this.onChange
    };

    return (
      <div className="container">
        <h2>Borrow</h2>
        <p>
          Borrow with a group to reduce your interest rate.
        </p>

        <label>Amount ($)</label>
        <input type='number' required />

        <label>Group members</label>
        <table>
          <tbody>
            <tr>
              <td><Autosuggest suggestions={this.state.suggestions}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                onSuggestionsUpdateRequested = {this.onSuggestionsUpdateRequested}
                onSuggestionSelected = {this.onSuggestionSelected}
                /></td>
            </tr>
            </tbody>
        </table>

        <button>Submit</button>
      </div>
    );
  }
}

export default Borrow;
