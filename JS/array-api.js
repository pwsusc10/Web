// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const str = fruits.join('');
  console.log(str);
}

// Q2. make an array out of a string
{
  const fruits = 'π, π₯, π, π';
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result= students.find((student) => student.score === 90);
  console.log(result);
  // console.log(list);
  // function func (item){
  //   console.log(`123 ${item.score}`);
  //   return true;
  // };
  // const result = students.find(func("item"));
}
// Q6. make an array of enrolled students
{
  const lst= [];
  for(let student of students){
    // console.log(student.enrolled);
    if (student.enrolled === true) {
      lst.push(student); 
    }
  }
  console.log(lst);

  const result= students.filter((student) => student.enrolled === true)
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result= [];
  for(let student of students) {
    result.push(student.score)
  }
  console.log(result);

  const result2= students.map((student)=>student.score);
  console.log(result2);
}
// Q8. check if there is a student with the score lower than 50
{
  // some: μ‘°κ±΄μ λ§μ‘±νλ elementκ° μλμ§ νμΈ. μλ€λ©΄ true μλ€λ©΄ false
  const result1= students.some((student)=> student.score < 50);
  console.log(result1);

  // every: μμλ€μ΄ μ‘°κ±΄μ λͺ¨λ λ§μ‘±νλ€λ©΄ true, νλλΌλ λ§μ‘±νμ§ μμΌλ©΄ false
  const result2= students.every((student)=> student.score < 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  const result= students.reduce((prev, curr)=> {
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result= students
  .map((student) => student.score)
  .filter((score)=> score >= 60)
  .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result= students
  .map((student)=> student.score)
  .sort((a, b)=> b - a)
  .join();
  console.log(result);
}
