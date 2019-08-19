import React, {Component} from 'react';

class TableItems extends Component {
    render(){
      const {myData}=this.props      
    return ( 
    <React.Fragment>  
      <td>{myData.id}</td>
 <td>{myData.name}</td>
 <td>{myData.private?"private":"public"}</td>
 <td>{myData.private?"private":"public"}</td>
 <td>{myData.private?"YES":"NO"}</td>
 <td>{myData.language}</td>
 <td>{myData.ssh_url}</td>
   </React.Fragment> 
   )
}}

export default TableItems;
