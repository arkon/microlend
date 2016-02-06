import React from 'react';

class Borrow extends React.Component {
  render () {
    return (
      <div className="container">
        <h3>Borrow</h3>

        <label>Amount ($)</label>
        <input type='number' required />

        <label>Group members</label>
        <table>
          <tr>
            <td>Person 1</td>
            <td><button>Remove</button></td>
          </tr>
          <tr>
            <td><input type='text' placeholder='Username' /></td>
            <td><button>Add</button></td>
          </tr>
        </table>

        <button>Submit</button>
      </div>
    );
  }
}

export default Borrow;
