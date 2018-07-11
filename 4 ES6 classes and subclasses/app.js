class Person {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting(){
    return `Hello there ${this.firstName}  ${this.lastName} `
  }

}

const ana = new Person('Ana', 'Ayala');
const jose  = new Person('Jose', 'Perez');

// console.log(ana);
// console.log(jose);
// console.log(Person);


class Customer extends Person{
  constructor(firstName, lastName, phone, membership){
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }
  static getMembershipCost(){
    return 500;
  }
}


const john = new Customer('john', 'smith', '555-999-8958', 'gold');
console.log(john);
console.log(john.greeting());



// to get the static method from customer 
console.log(Customer.getMembershipCost());

