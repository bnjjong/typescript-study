export class Person {
  /* 이름 */
  private _name: string;
  /* 직업 */
  private _occupation: string;

  constructor(name: string, occupation: string) {
    // this -> 용도가 많음.
    this._name = name;
    this._occupation = occupation;
  }

  /**
   * 정보 출력
   */
  print(): void {
    console.log('printing...');
    console.log(`name: ${this._name}`);
    console.log(`occupation: ${this._occupation}`);
  }

  foo(value1: string, value2?: string) : void {
    console.log(`value1: ${value1}, value2 : ${value2 ? value2 : ""}`);

  }

  foo2(value1: string, value2 = 'default') : void {
    console.log(`value1: ${value1}, value2: ${value2}`);

  }

  callback(name: string) : Function {
    return function () {
      console.log(`${name} is callback!` );
    }
  }

  callback2(name: string) : Function {
    return () => {
      console.log(`${name} is callback!` );
    }
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get occupation(): string {
    return this._occupation;
  }

  set occupation(value: string) {
    this._occupation = value;
  }
}