import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./styles.css";

const Posts = [{
  name: "Asim", 
  date: "1-Dec-2020", 
  profile: "https://th.bing.com/th/id/OIP.RGgr9AD6YV8bLYz8lgF4IQDMEy?pid=Api&s=1",
  time:"10:00 am", 
  img: "https://i.ytimg.com/vi/QwievZ1Tx-8/maxresdefault.jpg",
},
{
  name: "Touqeer", 
  date: "1-Dec-2020", 
  profile: "https://th.bing.com/th/id/OIP.RGgr9AD6YV8bLYz8lgF4IQDMEy?pid=Api&s=1",
  time:"10:00 am", 
  img: "https://api.time.com/wp-content/uploads/2018/04/dtt4200_v519-1049.jpg", 
},
{
  name: "Faraz", 
  date: "1-Dec-2020", 
  profile: "https://th.bing.com/th/id/OIP.RGgr9AD6YV8bLYz8lgF4IQDMEy?pid=Api&s=1",
  time:"10:00 am", 
  img: "https://i.ytimg.com/vi/QwievZ1Tx-8/maxresdefault.jpg",
},
{
  name: "Touqeer", 
  date: "1-Dec-2020", 
  profile: "https://th.bing.com/th/id/OIP.RGgr9AD6YV8bLYz8lgF4IQDMEy?pid=Api&s=1",
  time:"10:00 am", 
  img: "https://api.time.com/wp-content/uploads/2018/04/dtt4200_v519-1049.jpg", 
},]

 const renderPosts = Posts.map((p) =>  {
  return (
    
  <div style={{
   display: 'flex',
   boxSizing: "border-box",
   alignItems: "column",
    paddingBottom: 20,
  }}>
  <div style={{
    padding: '1%',
    borderRadius: 10,
    backgroundColor: ' rgb(235, 235, 235',
  }}>
  <div style={{
    display: 'flex',
    boxSizing: 'border-box',
    flexDirection: 'row',
    fontSize: 14,
    paddingLeft: 10
  }}> 
  <span> <img width="100" src={p.profile} alt="profile" style={{
    width: 35,
    height: 35,
    borderRadius: '50%'
  }}></img> </span> 
  <span  > &nbsp;&nbsp; <b>{p.name}</b> <br /> &nbsp;&nbsp;{p.date} - {p.time}</span> <br />
  </div>
  <br />
  <img width="500px" src={p.img}  alt="pic"></img>
  <br />
  <div style={{
    display: 'flex',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    borderWidth: 1, 
    borderColor: 'black',
    borderRadius: 5,
    padding: 10
  }}> 
  <span> <a style={{
    textDecoration: 'none',
    color: 'black'
  }} href="#"> Like </a></span>
  <span><a style={{
    textDecoration: 'none',
    color: 'black'
  }} href="#"> Comments </a></span>
  <span> <a style={{
    textDecoration: 'none',
    color: 'black'
  }} href="#"> Share </a></span>

  </div>
</div>
<br />
<br />


</div>
  )
});



const FbPost = () => {
  return (
    <div style={{
      display: 'flex',
      boxSizing: 'border-box',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      {
        renderPosts
      }
    </div>
  )
}

export default FbPost;