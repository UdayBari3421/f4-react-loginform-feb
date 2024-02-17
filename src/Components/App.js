// import React, { useState } from "react";
// import Form from "./Form";

// const App = () => {
//   const [error, setError] = useState({
//     errEmail: null,
//     errPassword: null,
//   });

//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [style, setStyle] = useState({ border: "1px solid blue" });

//   return (
//     <div className="App">
//       <Form
//         setError={setError}
//         error={error}
//         setUser={setUser}
//         user={user}
//         style={style}
//         setStyle={setStyle}
//       />
//     </div>
//   );
// };

// export default App;

import React from "react";
import Form from "./Form";

const App = () => {
  return (
    <div className="App">
      <Form />
    </div>
  );
};

export default App;
