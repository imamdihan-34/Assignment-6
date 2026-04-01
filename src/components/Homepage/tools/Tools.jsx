import React from 'react';
import { use } from 'react';

const Tools = ({toolsPromise}) => {
    console.log(toolsPromise);
    const data = use(toolsPromise)
    console.log(data)
    return (
        <div className='container mx-auto'>
           Tools: {data.length}
        </div>
    );
};

export default Tools;