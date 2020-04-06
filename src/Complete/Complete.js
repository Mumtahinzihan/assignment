// import React from 'react';
// import axios from 'axios';

// export default class DetailsComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             complete: []
//         }
//     }
//     componentDidMount() {
//         axios.get(`https://beehiveapi.lionhearttrust.org.uk/v3.5/planner/users/d70cbe8d-11ac-e811-80e2-005056a23846/assignments/19521`)
//             .then(res => {
//                 this.setState({ complete: res.data.isComplete })
//             })
//             .catch(err => console.error('Sorry could not get data', err));
//     }

//     handleClick = () => {
//         this.setState({ complete: !this.state.complete })
//     }

//     render() {
//         const status = this.state.complete;

//         return (
//             <div>
//                 <p>Completion status: {status ? 'completd' : 'not completed'}</p>
//                 <button onClick={this.handleClick}>change status</button>
//             </div>
//         )
//     }
// }