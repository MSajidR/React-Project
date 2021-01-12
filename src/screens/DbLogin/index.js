import React, { useState, useEffect } from 'react'
import { data } from "../../constants";
import firebase from "../../config/firebase";


let database = firebase.database()
let dataRef = firebase.database().ref('/data');


function DbLogin() {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const [usersData, setUsersData] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [checkStatus, setCheckStatus] = useState('all');


useEffect(() => {
  userList();
  console.log("Use Effect Called"); 
}, [])



const userList = () =>{
  setCheckStatus('all');
  dataRef.once('value', (snapshot) =>{
    const data = snapshot.val();
    const numOfChild = snapshot.numChildren();
    const dataKey = Object.keys(data)

    
    
    dataKey.map((e, index) => {

    usersData.push({key: e, ...data[e]})
    if(usersData.length === numOfChild){
setIsLoading(false)
      
    }

    })

    // console.log(dataKey)

  
  });

  // const userDataList = database.ref('/data');
  // userDataList.on('value', gotData, erorData)
}

// function gotData(data){
//   console.log(data.val());

// }
// function erorData(error){
//   console.log(error)
// }




const submitLogin = () => {

    database.ref().child('/data').push({email, name, password})
    console.log('submited:  '+ email)
  

    
  }

    return(
    <div>

  <label>Name:</label> 
      <br />
      <br />
    <input type="text" value={name} onChange={e => { 
       setName(e.target.value)
      console.log(e.target.value)

      }} /> 
    <br/>
    <br/>

      <label>Email:</label> 
      <br />
      <br />
    <input type="email" value={email} onChange={e => { 
       setEmail(e.target.value)
      console.log(e.target.value)

      }} /> 
    <br/>
    <br/>

      <label>Password:</label>
      <br />
      <br />
    <input type="password" value={password} onChange={e => { 
      setPassword(e.target.value)
      console.log(e.target.value)
      }} /> 
      <br/>
      <br/>


      <br/>
     <button onClick={submitLogin}> Submit </button> 


<div>
  
   
   </div>
  
          <br />
     <br />
     <button onClick={userList}> User List </button>
     <button onClick={() => setCheckStatus('active')}> Active User List </button>
     <button onClick={() => setCheckStatus('inactive')}> Inactive User List </button>
     <br />
     <br />

     <div>
       
     <table border='1px solid black'>
       <tr>
             <th>Name</th>
             <th>Email</th>
             <th>Password</th>
             <th>Status</th>
      </tr>
       {!isLoading ? usersData.map((list, i) =>{
       
          return   (list.status === checkStatus || checkStatus === 'all' ) && <tr>
             <td>{list.name}</td>
             <td>{list.email}</td>
             <td>{list.password}</td>
             <td>{list.status}</td>
       </tr>
        }) : <div>Loading</div> }
           </table>

     </div>
     </div>

     
    ); 
}

export default DbLogin;