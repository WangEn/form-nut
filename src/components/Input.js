import React, { Component } from 'react';

// export default class Input extends Component {
//   render(){
//     return (
//       <div>
//         <input />
//       </div>
//     )
//   }
// }

export default function Input(props) {
  return (
    <div>
      <input name={props.name} placeholder={props.placeholder} />
    </div>
  )
}