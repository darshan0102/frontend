// import React from 'react';

// const ComC = () => {
//     return (
//         <div>
//             <h1>i am c compornent</h1>
//         </div>
//     );
// }

// export default ComC;


import React from 'react';
import ComA from './ComA';
import ComB from './ComB';

const ComC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ComA />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p>This is the content of the website.</p>
      </main>
      <ComB/>
    </div>
  );
}

export default ComC;
