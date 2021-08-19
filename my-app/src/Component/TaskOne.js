import React from 'react';

const TaskOne = () => {
  let string1 = 'BC';
  let string2 = 'BANGALORE';
  
  let output1 = string1.split('').map((data) => string1.replace(/B/, ''))[0];
  let output2 = string2.split('').map((data) => string2.replace(/B/, ''))[0];

  console.log(output1);
  console.log(output2);
  return <div>
    <h1>Task 1: Two strings as input!</h1>
    <h4>STR1 : {string1}</h4>
    <h4>STR2 : {string2}</h4>
    <h4>OP1 : {output1}</h4>
    <h4>OP2 : {output2}</h4>
  </div>;
};

export default TaskOne;
