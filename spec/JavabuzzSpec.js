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

  it('knows that a number is not divisible by fifteen', function() {
    expect(javabuzz.isDivisibleByFifteen(1)).toEqual(false);
  });

  it('says "Java" when given 3', function() {
    expect(javabuzz.say(3)).toEqual("Java");
  });

  it('says "Buzz" when given 5', function() {
    expect(javabuzz.say(5)).toEqual("Buzz");
  });

  it('says "JavaBuzz" when given 15', function() {
    expect(javabuzz.say(15)).toEqual("JavaBuzz");
  });

  it('says the number when not divisible by 3 or 5',function(){
    expect(javabuzz.say(1)).toEqual(1);
  });
});
