import '../styles/errorPage.scss';
import React, { Component } from 'react';

class ErrorPage extends Component {
  render() {
    return (
      <div id='error-page'>
        <h1>Oops!</h1>
        <p>Sorry, this page does not exist.</p>
      </div>
    );
  }
}

export default ErrorPage;
