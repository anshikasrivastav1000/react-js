//map
const num =[1,2,3,4,5];

const tri = num.map(num => num*2);
console.log(tri)

//question 1
const stuname = ['anshika','arun','ashu','harsh']
const stu = stuname.map(stuname =>stuname.toUpperCase())
console.log(stu)
//question 2
const num2 =[10,20,30,40,50];
const decby5 = num2.map(num2 => num2 -5);
console.log(decby5)
//question 3
const num3=[5,10,20,25,30];
const lessthen20 = num3.filter(num3 => num3 <= 20)
console.log(lessthen20)
//question 4
const fruit =['appleee','banana','chreeyyy','berry'];
const fruitname = fruit.filter(fruit=> fruit.length>5 )
console.log(fruitname)
//question 5
const num4 = [1,2,13,4,5]
const maxnum = num4.reduce((max ,cur )=> cur > max ? cur:max,num4[0] )
console.log(maxnum);
//question 6
const num5 = [2,4,6,8,10];
const squ = num5
.map(num5 => num5*num5)
.reduce((acc,cur)=>acc+cur)
console.log(squ)
//question 7
const num6 =[1,2,3,4,5];
const result = num6
.map(num6 => num6*num6)
.filter(num6 => num6 >10)
.reduce((acc,cur)=> acc+cur)
console.log(result)

//reduce
const product =num.reduce((acc ,cuu)=> acc*cuu) 
console.log(product)