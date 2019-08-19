import React, {
  Component
} from 'react';
import Search from './components/Search';
import Table from './components/Table';
import axios from 'axios';

class App extends Component {
  state = {
    data : []
  }


  

   
  



  userChange=(value)=>{
    let request = `https://api.github.com/users/${value}/repos`;

    axios
      .get(request)
      .then(response => {
        console.log(response.data)

        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log('error')
      });
    console.log(this.state)
  }

  render() {
    const {data} = this.state
    return ( 
    <div>
      app 
      <Search userChange={this.userChange}/>
         
      <Table myData = {data}/> 
      
    </div>

    );
  }
}

export default App;