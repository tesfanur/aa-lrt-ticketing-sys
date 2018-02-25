 function generateUniqueId() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  // return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
  //   s4() + '-' + s4() + s4() + s4();
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4();
}

//console.log(generateUniqueId());
    // var uniqid = require('uniqid');
    // console.log(uniqid('tesfanur'));
    // console.log(uniqid.time())
    // console.log(uniqid.process())

var shortid = require('shortid');

console.log(shortid.generate());
