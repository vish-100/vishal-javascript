console.log('Vishal')
let num=0;
let a=new Boolean(num);
console.log(a); 
const arr=["Vishal","Aditya",1]
const obj={
    name:"Vishal",
    age:12,
}
console.log(arr);
console.log(obj);
const myfunctn=function()
{
    console.log("hello");
}
myfunctn();
const g=6926384732047774093243n
console.log(typeof g);
const str=new String("vishal")
console.log(str[0])
const str1="vishal"
console.log(str1[0])
console.log(str.toUpperCase())
console.log(str1.toUpperCase())
console.log(str1.charAt(0))
console.log(str1.indexOf('v'))
console.log(str.substring(0,4))
console.log(str.slice(-4,6))
console.log(str.replace('i','a'))
console.log(str)
const number=100000
console.log(number.toFixed(2))
console.log(number.toPrecision(3))
console.log(number.toLocaleString('en-In'))
console.log((Math.floor)((Math.random()*6)+1))
let myDate=new Date()
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
let myCreateDate=new Date(2023,0,24,7,40)
console.log(myCreateDate)
console.log(myCreateDate.toDateString())
console.log(myCreateDate.toString())
console.log(myCreateDate.toLocaleDateString())
console.log(myCreateDate.toLocaleString())
let dater=new Date("2023-02-14")
console.log(dater.toLocaleDateString())
let time=Date.now()
console.log(time)
console.log(myCreateDate.getTime())
console.log(dater.getDate())
console.log(dater.getDay())
console.log(dater.getMonth())
console.log(myCreateDate.toLocaleString('default',{
    weekday: "long"
}))
const myArr=[0,1,2,3,4,5]
console.log(myArr[1])
myArr.push(6)
myArr.push(7)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(9)
console.log(myArr)
myArr.shift()
console.log(myArr)
const newArr=myArr.join()
console.log(newArr)
const arr2=myArr.slice(0,3)
console.log(arr2)
const arr3=myArr.splice(0,3)
console.log(arr3)
console.log(myArr)
const arr12=[1,5,6]
const arr13=[2,4,9]
const arr14=[...arr12,...arr13]
console.log(arr14)
const arr15=[1,2,[3,4],5,[6,7,[8,9]],[10,11]]
const ant16=arr15.flat(2)
console.log(Array.from("Vishal"))
console.log(Array.from(obj))
console.log(Array.of(arr12,arr13,arr14))
const symbi=Symbol["key1"]
const myobj={
    name:"Vishal Deora",
    [symbi]:"mykey1",
    age:18
}
console.log(myobj.name)
console.log(myobj[symbi])
console.log(myobj.age)
myobj.greeting=function(){
    console.log(`Hello friend ${this.name}`)
}
myobj.greeting();
Object.freeze(myobj)
myobj.name="Vishal"
console.log(myobj)
const newuser=new Object({name:"Virat",age:30});
/* newuser.name="Virat"
newuser.age=34 */
console.log(newuser)
const objrr={
    name:{
        newuser:{
            first_name:"Vishal"
        }
    }
}
console.log(objrr)
console.log(objrr.name)
console.log(objrr.name.newuser)
console.log(objrr.name.newuser.first_name)
const obj11={1:"a",2:"b"}
const obj22={3:"c",4:"g"}
const obj3={4:"e",6:"f"}
const newobj=Object.assign({},obj11,obj22,obj3)
console.log(newobj)
const obj55={...obj11,...obj22,...obj3}
console.log(obj55)
console.log(Object.keys(obj55))
console.log(Object.values(obj55))
console.log(Object.entries(obj55))
console.log(obj55.hasOwnProperty(3))
function add(num1,num2)
{
    return num1+num2
}
console.log(add(2,3))
console.log(add(3,"2"))
function name(user)
{
    if(user)
    console.log(`Welcome ${user}`)
}
name("Vishal");
let sc=10
if(true)
{
    let sc=4
    console.log(sc)
}
console.log(sc)
let val=5;
function add(a)
{
    ++a;
    return
}

add(val)
console.log(val)


