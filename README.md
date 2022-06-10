src -> typescript 소스 폴더
compiled -> typescript 소스 파일의 컴파일된 js 파일

CLI
tsc 라고 치면 tsconfig.json 을 참조하여 컴파일 해준다.

## 특정파일 실행
```
node ./compiled/main.js
```


## export
외부로 참조할 수 있게 해준다.
다른 클래스에서 아래와 같이 찾을 수 있다.
```typescript
import {Person} from "./Person";

const henry: Person = new Person('henry', 'CEO');
henry.print();
```

## readonly
수정할 수 없다. 자바의 `final` 과 같다.
```typescript
export class Person {
  /* 이름 */
  private readonly name: string;
  /* 직업 */
  private occupation: string;
  
  constructor(name: string, occupation: string) {
    this.name = name;
    this.occupation = occupation;
  }
  
  /**
   * 정보 출력
   */
  print(): void {
    name = 'dfadf'; // x
    console.log('printing...');
    console.log(`name: ${this.name}`);
    console.log(`occupation: ${this.occupation}`);
  }
}
```
