import React, {useState} from 'react'
import TernaryOp from './TernaryOp';

const LogicalOp = () => {

  const [hideDetail, setHideDeatil] = useState(true);

  return (
    <div>
        <h1 className='p-2 bg-red-400 text-white text-center'>Logical && Conditional Rendering</h1>
        <div>{hideDetail && <p>hide me</p>}</div>
        <button onClick={() => setHideDeatil(!hideDetail)}>
            {hideDetail ? 'Hide' : 'Show'}
        </button>
        <TernaryOp/>
    </div>
  )
}

export default LogicalOp