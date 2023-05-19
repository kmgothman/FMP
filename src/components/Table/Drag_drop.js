import React from 'react';
import './Drag_drop.css';
import { UserContext } from '../../contexts/user.context';

class Drag_drop extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  static contextType = UserContext

  handleSubmit(event) {
    const { currentUser } = this.context
    event.preventDefault();
    console.log(
      `Selected file - ${this.fileInput.current.files[0]}`
    );
    var csv = this.fileInput.current.files[0];
     fetch('https://fmp-api.onrender.com/file', {
      method: 'post',
      headers: {'Content-Type': 'text/plain',
                'email': currentUser.email},
      body: this.fileInput.current.files[0]
  })
}

  render() {
    return (
      <div className="dragDropField">
        <form onSubmit={this.handleSubmit}>
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Drag_drop