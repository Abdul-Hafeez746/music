import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';

const Home = () => {
    const [data,setData] =useState([]);
    useEffect(()=>{
        // fetchData();
    },[])
    const fetchData = async()=>{
        let data = await fetch("https://api.github.com/users");
        data = await data.json();
        // console.log(data);
        localStorage.setItem("userData",JSON.stringify(data));
    }
    let users = JSON.parse(localStorage.getItem("userData"));
    console.log(users);
  return (
    <div class="container">

<h3 class="title"> Profiles </h3>
<br/>
<div id = "products-container" class="products-container">

    
    {users.length>1 ?
    <>
    {
        users.map((user)=>{
            return(
                <>
                    <Card user={user}/>
                </>
            )
        })
    }
    </>
     :
     <>
     <Card user={users}/>
     </>   
    }
</div>

</div>
  )
}

export default Home