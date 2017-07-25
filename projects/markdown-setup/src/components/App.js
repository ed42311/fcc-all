import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value:'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading'
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            This is a column
          </div>
          <div className="col-md-6">
            This is another column
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
