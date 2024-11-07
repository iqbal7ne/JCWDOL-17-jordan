// soal nomor 1
class Student {
  name: string;
  email: string;
  age: number;
  score: number;
  constructor(name: string, email: string, age: number, score: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

class LHA {
  highest: number;
  lowest: number;
  average: number = 0;
  constructor(numbers: number[]) {
    this.highest = Math.max(...numbers);
    this.lowest = Math.min(...numbers);
    for (let i = 0; i < numbers.length; i++) {
      this.average += numbers[i]; //cari sumnya
    }
    this.average = this.average / numbers.length;
  }

  get result() {
    return {
      highest: this.highest,
      lowest: this.lowest,
      average: this.average,
    };
  }
}

const test = new LHA([5, 23, 7, 3, 4, 26]);

const calArrStud = (students: Student[]) => {
  return {
    score: new LHA(students.map((student) => student.score)),
    age: new LHA(students.map((student) => student.age)),
  };
};

const john = new Student("john", "john@gmail.com", 15, 88);
const alex = new Student("alex", "alex@gmail.com", 16, 89);
const bujang = new Student("bujang", "bujang@gmail.com", 17, 95);

console.log(calArrStud([john, alex, bujang]));
