import React, {Component} from 'react';
import TableItems from './TableItems';

class Table extends Component {
    render(){
        const {myData}=this.props
    return (
        <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Repo State</th>
                  <th scope="col">Check</th>
                  <th scope="col">Private</th>
                  <th scope="col">language</th>
                  <th scope="col">URL</th>
                </tr>
              </thead>
<tbody>
             {myData.map(Element=>{
               return <tr><TableItems myData={Element}/></tr>
            })}
            </tbody>
            </table>

        </div>
    )
}}

export default Table;
