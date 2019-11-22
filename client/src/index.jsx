import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (username) {

    $.ajax({
      type: "POST",
      url: "http://localhost:1128/repos/",
      data: JSON.stringify({ username }),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function() {
        console.log('sent');
      },
      failure: function(errMsg) {
          alert(errMsg);
      }
    });
    // fetch('http://localhost:1128/repos', {
    //   headers: { 'Content-Type': 'application/json' },
    //   method: 'POST',
    //   body: JSON.stringify({ username }),
    // })
    //   .then(console.log('search term sent'));
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));