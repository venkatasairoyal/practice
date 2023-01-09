function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
  }
  
  //Create New Object From Constructor Using Arguments
  var Earl = new BellBoy('Earl E.Bird', 23, true, ['French', 'German'])
  
  //Access the Properties and Their Values
  console.log('Name : ', Earl.name)
  console.log('Age : ', Earl.age)
  console.log('Verified Work Permit : ', Earl.hasWorkPermit)
  console.log('Languages : ', Earl.languages)
  