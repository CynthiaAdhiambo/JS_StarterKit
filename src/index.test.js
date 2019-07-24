import { expect } from 'chai';
import jsdom from'jsdom';
import fs from 'fs';

describe('First Test', () => {
  it ('should pass', () => {
    expect(true).to.equal(true);
  });
});

//DOM Testing
describe('index.html', () => {
  it('should have h1 that says Users', (done) => {
    //read the contents in index.html,
    //store the read content into an in memory DOM i.e the fs
    //and equate the results of the above to an index constant
    const index = fs.readFileSync('./src/index.html', 'UTF-8');

    //configuring jsdom test
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Users');
      done(); //setting up the async
      window.close();
    });
  })
})
