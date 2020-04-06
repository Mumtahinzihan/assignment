// import React from 'react';
// import axios from 'axios';
// import './Details.css';

// export default class DetailsComponent extends React.Component {

//     state = {
//         assignments: [],
//         assignmentsGet: [],
//         array: []
//     }

//     componentDidMount() {
//         axios.get(`https://beehiveapi.lionhearttrust.org.uk/v3.5/planner/users/d70cbe8d-11ac-e811-80e2-005056a23846/assignments/${this.props.match.params.id}`)
//             .then(res => {
//                 this.setState({ assignments: res.data })
//                 this.setState({ assignmentsGet: res.data.setBy })
//                 this.setState({ array: res.data.groups })
//             })
//             .catch(err => console.error('Sorry could not get data', err));
//     }

//     render() {
//         const assignment = this.state.assignments;
//         const assign = this.state.assignmentsGet;
//         const group = this.state.array;

//         return (
//             <div>
//                 <div><h1>Details of Assignment</h1></div>

//                 <div className='detail'>
//                     <h2>Title: {assignment.title}</h2>

//                     <div className='assignment'>
//                         <p>Instruction: {assignment.details}</p>
//                         <p>Links: {assignment.links}</p>
//                         <p>Assignment Id: {assignment.id}</p>
//                         <p>Suggested timescale: {assignment.suggestedTimescale}</p>
//                         <p>Deadline: {assignment.deadline}</p>
//                         <p>Set on: {assignment.setOn}</p>
//                         <p>Complete: {assignment.isComplete ? 'Completed' : 'Not completed'}</p>
//                     </div>

//                     <div className='setby'>
//                         <h3>Set by:</h3>
//                         <p>Id: {assign.simsId}</p>
//                         <p>User type: {assign.userType}</p>
//                         <p>Email: {assign.email}</p>
//                         <p>Date of birth: {assign.dateOfBirth}</p>
//                         <p>Title: {assign.title}</p>
//                         <p>Id: {assign.id}</p>
//                         <p>First name: {assign.firstName}</p>
//                         <p>Initials: {assign.initials}</p>
//                         <p>Last name: {assign.lastName}</p>
//                     </div>

//                     <div className='group'>
//                         <h3>Groups:</h3>
//                         {
//                             group.map(gp => {
//                                 return (
//                                     <div key={gp.id}>
//                                         <p>Group id: {gp.id}</p>
//                                         <p>Name: {gp.name}</p>
//                                         <p>Friendly name: {gp.friendlyName}</p>
//                                         <p>School Id: {gp.school.id}</p>
//                                         <p>School name: {gp.school.name}</p>
//                                         <p>School code: {gp.school.code}</p>
//                                         <p>Group's code: {gp.code}</p>
//                                         <p>Group's type: {gp.type}</p>
//                                         <p>Group's summary: {gp.summary}</p>
//                                     </div>)
//                             })
//                         }
//                     </div>

//                 </div>
//             </div>
//         )

//     }
// }