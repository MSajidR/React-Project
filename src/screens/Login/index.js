import React, {useState} from 'react'
import { data } from "../../constants";



const arry = [
  {
    userName: 'sajid',
    password: 'sajid123'
  },
]

function Login() {


const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const submitLogin = () => {
  
  const arryVal = arry.filter(t => t.userEmail ===  email && t.password === password  )
  
  // console.log(arryVal[0].userEmail, arryVal[0].password)

  
  if(arryVal.length === 0){
    alert('no user')
  }else
  {
    alert(`welcom ${arryVal[0].userEmail}`)
  }

}


const getUser = async () => {
  // const response = await fetch('https://jsonplaceholder.typicode.com/users')
  // const parsed =  await response.json()
  
  const loginData = data.filter(t => {
    
  return  t.email === email

  })
  console.log(loginData)

}


  return (
    <div>
      <input type="email" value={email} onChange={e => { 
        setEmail(e.target.value)
        console.log(e.target.value)
        }} /> 
      <br/>
      <br/>

      <input type="password" value={password} onChange={e => { 
        setPassword(e.target.value)
        console.log(e.target.value)
        }} /> 
        <br/>
        <br/>

        <button onClick={submitLogin}> Submit </button>

        <br/>
        <br/>

        <button onClick={getUser}> Get User </button>

    </div>
  );


      }


      export default Login;





      // let [num1, setNum1] = useState(0);
// let [data, setData] = useState({ theme: "Dark"});

// const add = () => {
//   setNum1(num1 + 1)
//   console.log(num1);
// }

// const changeTheme = () => {
//   if (data.theme === "Dark") {

//     setData({ ...data, theme: "Light" })

//   } else {
//     setData({ ...data, theme: "Dark" })

//   }
//   console.log(data);
// }

// return (
//   <div className="App">
//     <h1> {num1}  </h1>
//     <h1> {(num1 % 2 === 0) ? "even number" : "odd number"}  </h1>
//     <button onClick={add} >Add</button>
//     <br />
//     <button onClick={changeTheme} >Change Theme </button>
//     <h3>Theme: {data.theme}</h3>
//     <h3>Room: {data.room}</h3>
//   </div>



// );
// }

