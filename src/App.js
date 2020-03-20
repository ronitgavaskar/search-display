import React, {Component} from 'react';
import './App.css';
import SearchBar from "./components/search/search-bar";
import Display from "./components/display/display";

class App extends Component {
  constructor() {
    super();

    // initialize state with allUsers and userName
    this.state = {
      allUsers: [],
      userName: ""
    }
  }

  componentDidMount() {
      // call the API
      fetch('https://jsonplaceholder.typicode.com/users')

          // get the data as a json response
          .then(response => response.json())

          // get resp body as "users" and set state.allUsers to be users
          .then(users => this.setState({allUsers: users}))
  }

  // set this as an arrow function to not deal with the context
  onSearch = (e) => {
    this.setState({userName: e.target.value})
  };

  render() {


    const { allUsers, userName } = this.state;

    // filters allUsers to see which user contains userName
    const candidates = allUsers.filter(user =>
      user.name.toLowerCase().includes(userName.toLowerCase())
    );

    // when filterUsers is passed in, it triggers the setState determined within onSearch
    return(
        <div className="members-menu">
          <SearchBar
            filterUsers={e => this.onSearch(e)}/>
          <Display
              searchedUsers={candidates}/>
        </div>
    )
  }
}

export default App;
