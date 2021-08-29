import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState();
  const cb = () => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString(), 1000);
    });
  };
  useEffect(cb, []);
  return <h1>{currentTime}</h1>;
};
export default Clock;
// export default class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentTime: new Date().toLocaleTimeString(),
//     };
//   }
//   componentDidMount() {
//     setInterval(() => {
//       this.setState({ currentTime: new Date().toLocaleTimeString() });
//     }, 1000);
//   }
//   render() {
//     const { city } = this.props;
//     const { currentTime } = this.state;
//     return (
//       <h1>
//         {city} : {currentTime}
//       </h1>
//     );
//   }
// }
