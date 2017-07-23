import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      thing: "thing"
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
