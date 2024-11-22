console.log('Start');

function doTaskAsync() {

setTimeout(() => {

console.log('Task is being done asynchronously.');

}, 2000); // Wait for 2 seconds before running the task

}

doTaskAsync(); // This starts, but won't block the next line

console.log('End');
