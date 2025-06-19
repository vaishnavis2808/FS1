const mul=(a,b)=>{
    return a*b
}
console.log(mul(12,11));

const obj={
    name:'Cris',
    age:40,
    message:function(){
        let name=obj.name
        return `Hello I am ${name}`
    }
}
console.log(obj.name);
console.log(obj.message());

const numbers=[1,3,4,88,21,-35,-26,]
const mappednum=numbers.map((num)=>num*3)
console.log(mappednum);

//filter-return new array with element saatisfying the condition
const posNum=numbers.filter((num)=>num>0)
console.log(posNum);

const oddNum=numbers.filter((num)=>num%2!=0)
console.log(oddNum)

//reduce-reduced to single element
const total=numbers.reduce((sum,n)=>sum+n,0)
console.log(total);

const products=[
    {name:'tv',price:8000},
    {name:'phone',price:6000},
    {name:'lap',price:70000},
    {name:'remote',price:300},
    {name:'aircooler',price:4000}
]
const totalPrice=products.reduce((sum,n)=>sum+n.price,0)
const tot=products.filter((n)=>n.price>=5000);
console.log(totalPrice);
console.log(tot);

//Destructuring
const user={name:'Vaishnavi',password:'12345678'}
const {name,password}=user
console.log(password);
const number=[1,2,3,4,5,6]
const [first,second,third,...spread]=number
console.log(third);
console.log(spread);

//spread
const arr=[1,2,3]
const copy=[...arr,4,5,6]
console.log(copy);
const copy1=[...arr,...copy]
console.log(copy1);

//rest
function add(...arguments){
    return arguments.reduce((sum,n)=>sum+n,0);
}
console.log(add(1,2,3,4,5))

//callback
function function1(){
    console.log(`from inside callback`)
}
function fun(name,callback){
    callback()
    return`${name} from outside callback`
}
console.log(fun('function',()=>{console.log(`from inside callback`)}));

async function fetchUsers(){
    try{
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        )
        const data=await response.json()
        //console.log(data);
        data.map((a)=>console.log(a.name))
    }catch(error){
        console.log(error);
    }
}
fetchUsers()