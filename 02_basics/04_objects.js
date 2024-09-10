// const tinderUser = new Object()
const tinderUser = {}    // this and upper line is same

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
            userfullname: {
                firstname: "Shivlee",
                lastname: "Yadav"
            }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 2: "b"}

// const obj3 = Object.assign({},obj1,obj2)   //{} it is a optional parameter which assures that result is gauranted correct

const obj3 = {...obj1,...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "hcab@gmail.com"
    },
    {
       name: "shivlee" 
    }
]
 console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));   //ye print hoga =>//[ 'id', 'name', 'isLoggedIn' ]  =>datatype => array

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));     // to check if this property is available or not



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Shivlee"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);

console.log(instructor);

// {
//     "name": "Shivlee",                    // treated as json
//     "coursename": "js in hindi",
//     "price": "free"
// }

//api's hme arrays ki form me bhi milte h

