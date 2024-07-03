// import React from 'react';
// import ComB from './ComB';

// const ComA = () => {
//     return (
//         <div>
//             <ComB/>
//         </div>
//     );
// }

// export default ComA;



import React from 'react';

const ComA = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          My Website
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default ComA;
