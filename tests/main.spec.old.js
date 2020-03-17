//import{expect} from 'chai';
var expect = require('chai').expect;
// describe - use to class and method
describe('Main', function(){
  var arr;

  // run one time before of block
  before(function(){    
  })
  // run one time after of block
  after(function(){    
  })
  // run evertime, before of block
  beforeEach(function(){
    arr = [1,2,3];
  })
  // run evertime, after of block
  afterEach(function(){    
  })
  // Test types (smoke test)
  it('should be an array', function(){
    expect(arr).to.be.a('array') // Usando o Chai
  })
  // run one time before of block
  it('should have a size of 4 when push another value to the array', function(){
    arr.push(4);
    expect(arr).to.have.length(4) // Usando o Chai
  })
  it('should have a size of 2 when pop value from the array', function(){
    arr.pop()
    expect(arr).to.have.include(2); // Usando o Chai
  })
  it('should remove the value 3 when use pop in the array', function(){
    arr.pop();
    expect(arr).to.not.include(3);   // Usando o Chai
  })
  
})