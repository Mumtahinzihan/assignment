import React from 'react';
import Home from '../Home/Home';
import './GetAssignment.css';
import axios from 'axios';

export default class GetAssignment extends React.Component {
  constructor() {
    super();
    this.state = {
      assignments: [],
      isChecked: false
    }
  }
  componentDidMount() {
    axios.get(`https://beehiveapi.lionhearttrust.org.uk/v3.5/planner/test/assignments`)
      .then(res => {
        console.log(res.data)
        this.setState({ assignments: res.data.items })
      })
      .catch(err => console.error('Sorry could not get data', err));
  }


  render() {
    return (
      <div>
        <h1 className='heading'>Assignments</h1>

        <ul>
          {this.state.assignments
            .sort((x, y) => x.setOn.substr(0, 10).split('-').join('') - y.setOn.substr(0, 10).split('-').join(''))
            .map(a =>
              <ol key={a.id}>
                <Home title={a.title} id={a.id} />
              </ol>)}
        </ul>
      </div>
    )
  }
}
