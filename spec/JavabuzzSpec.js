describe ('Javabuzz', function(){
  var javabuzz;

  it('knows when a number is divisible by three', function(){
    javabuzz = new Javabuzz;
    expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
  });

  it('knows when a number is not divisible by three', function(){
    javabuzz = new Javabuzz;
    expect(javabuzz.isDivisibleByThree(1)).toEqual(false);
  });

});