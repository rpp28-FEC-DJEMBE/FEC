import React from 'react';

class RelatedPdt extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <ul>
        {
          this.props.users.map( user =>
            (
              <li className="userLi" key={user.userId}>#{user.userId}: {user.username}</li>
            )
          )
        }
      </ul>
    )
  }
}

// const RelatedPdt = (props) => (
//   <ul>
//     {
//       props.users.map( user =>
//         (
//           <li className="userLi" key={user.userId}>#{user.userId}: {user.username}</li>
//         )
//       )
//     }
//   </ul>
// )

export default RelatedPdt;

// this.state = {
//   users: [
//     {
//       userId: 1,
//       username: 'Kingsley'
//     },
//     {
//       userId: 2,
//       username: 'Huiqing'
//     },
//     {
//       userId: 3,
//       username: 'Simon'
//     },
//     {
//       userId: 4,
//       username: 'Andre'
//     }
//   ]
// }