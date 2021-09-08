import React from 'react';
import Form from './Components/Form';

function App() {
  return (
    <div className="container p-12  lg:space-x-0 mx-auto h-screen  lg:flex items-center justify-between  ">
      <div className="w-full lg:w-1/2">
        <h1 className="text-white text-3xl lg:text-5xl font-bold text-center lg:text-left  ">Learn to code by <br/> watching others</h1>
        <p className="mt-7 font-medium  text-center lg:text-left text-white">
          See how experienced developers solve problems in real-time. <br/> Watching scripted tutorials is great, 
          but understanding how <br/> developers think is invaluable. 
        </p>
      </div>
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 mx-auto  ">
        <div className="max-w-xl mx-auto mb-7">
          <button className="p-5 w-full shadow-new rounded-xl  bg-indigo-550 text-white hover:bg-indigo-600 "><span className="font-bold ">Try it free 7 days</span> then $20/mo. thereafter</button>
        </div>
       <Form/>
      </div>
    </div>
  );
}

export default App;
