import React, { useEffect } from 'react'
import {useNavigate, useParams } from "react-router-dom";
const ProfileDetail = () => {
   const {login} = useParams();
   const navigate  = useNavigate();

   useEffect(()=>{
      // fetchData();
       },[])
   const fetchData = async()=>{
    try {
      let response = await fetch(`https://api.github.com/users/${login}`)
      const user = await response.json();
      localStorage.setItem("filter",JSON.stringify(user));
    } catch (e) {
      console.log(e);
    }
   }
   const back = ()=>{
    navigate("/")
   }
   let getUser = JSON.parse(localStorage.getItem("filter")); 
   console.log(getUser);
  return (
    <>
    <button onClick={back}>Back</button>
      <div className="container">
        <div className="box">
          <div className="profile-box">
            <div className="row">
              <div className="image">
                <img src={getUser.avatar_url} alt="user" />
              </div>
              <div className="about">
                <div className="details">
                  <h1 className="name">{getUser.name} </h1>
                  <h3 className="username">{getUser.login}</h3>
                  <p className="country"><span><ion-icon name="location-sharp" /></span>{getUser.location? getUser.location : "No Location" }</p>
                </div>
                <div className="btn-profile">
                  <a href="#" target="_blank">Visit Profile</a>
                </div>
              </div>
            </div>
            <div className="bio">
              <h3>About</h3>
              <p>{getUser.bio ? getUser.bio : "no bio"}</p>
            </div>
            <div className="row-followers">
              <div className="col">
                <h3 className="heading">
                  Followers
                </h3>
                <p>{getUser.followers}</p>
              </div>
              <div className="col">
                <h3 className="heading">
                  Following
                </h3>
                <p>{getUser.following}</p>
              </div>
              <div className="col">
                <h3 className="heading">
                  Repos
                </h3>
                <p>{getUser.repos_url.length}</p>
              </div>
            </div>
            <div className="row-followers">
              <div className="col">
                <h3 className="heading">
                  Followers
                </h3>
              
              </div>
              <div className="col">
                <h3 className="heading">
                  Following
                </h3>
                
              </div>
              <div className="col">
                <h3 className="heading">
                  Repos
                </h3>
                
              </div>
            </div>
            <div className="respos-row">
              <ul id="repo">
                {/* {
                  getUser.repos_url.map((repo)=>{
                    return (repo.map((e)=>{
                      return <a href={e.html_url} target="_blank"><li>e.name</li></a>
                    })
                    )
                  })
                } */}
                {/* repo.forEach((r)=>{
        r.forEach((e)=>{
           j+=`<a href="${e.html_url}" target="_blank"><li>${e.name}</li></a>`;
        })
    }) */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileDetail

