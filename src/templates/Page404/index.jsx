import { Component } from 'react';

class Page404 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1>Error 404 - Page not found</h1>
      </div>
    );
  }
}

export default Page404;
