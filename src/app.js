class Hello {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get Name() {
    return this.name;
  }

  set Name(name) {
    this.name = name;
  }

  get Age() {
    return this.age;
  }

  set Age(age) {
    this.age = age;
  }
}

class Human extends Hello {
  constructor(name, age) {
    super(name, age);
  }

  print() {
    console.log(`Name: ${this.Name}`);
    console.log(`Age: ${this.Age}`);
  }
}

class Param {
  print(hello) {
    console.log(`Name: ${hello.Name}`);
    console.log(`Age: ${hello.Age}`);
  }
}

const main = () => {
  const hello = new Hello("Daniel", 23);
  console.log(`Name: ${hello.Name}`);
  console.log(`Age: ${hello.Age}`);

  // Human
  const human = new Human("Brian", 34);
  human.print();

  // Param
  const param = new Param();
  const someHello = new Hello("Mark", 10);

  param.print(someHello);
};

main();
