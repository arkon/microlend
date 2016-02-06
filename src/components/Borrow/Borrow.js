import React from 'react';
import Autosuggest from 'react-autosuggest';

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

function renderSuggestion(suggestion){
  const profileImage = '/img/users/' + suggestion.img;
  return (<span><img src={profileImage} />{suggestion.name}</span>);
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
              <td>Person 1</td>
              <td><button>Remove</button></td>
            </tr>
            <tr>
              <td><Autosuggest suggestions={this.state.suggestions}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                onSuggestionsUpdateRequested = {this.onSuggestionsUpdateRequested}
                onSuggestionSelected = {this.onSuggestionSelected}
                /></td>
              <td><button>Add</button></td>
            </tr>
            </tbody>
        </table>

        <button>Submit</button>
      </div>
    );
  }
}

export default Borrow;
