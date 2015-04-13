describe ('Javabuzz', function(){

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz;
  });

  it('knows when a number is divisible by three', function() {
    expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
  });

  it('knows when a number is not divisible by three', function() {
    expect(javabuzz.isDivisibleByThree(1)).toEqual(false);
  });

  it('knows that a number is divisible by five', function() {
    expect(javabuzz.isDivisibleByFive(5)).toEqual(true);
  });

  it('knows that a number is not divisible by five', function() {
    expect(javabuzz.isDivisibleByFive(1)).toEqual(false);  
  });

  it('knows that a number is divisible by fifteen', function() {
    expect(javabuzz.isDivisibleByFifteen(15)).toEqual(true);
  });

  it('knows that a number is not divisible by fifteen', function(){
    expect(javabuzz.isDivisibleByFifteen(1)).toEqual(false);
  });
});
