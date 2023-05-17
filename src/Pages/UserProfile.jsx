import React, { useState } from "react";
import Card from "../Components/Card";

const UserProfile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = e => {
    
    setUsername(e.target.value);
  };

//   const fetchProfile = async () => {
//     const userProfile = JSON.parse(localStorage.getItem("userProfile"));
//     const userRepo = JSON.parse(localStorage.getItem("repos"));

//     if (userProfile && userRepo) {
//       const filterProfile = userProfile.find(profile => username === profile.login);
//       const filterRepo = userRepo.find(repo => username === repo.fullname.split("/")[0]);

//       if (filterProfile && filterRepo) {
//         setData(filterProfile);
//         setRepositories(filterRepo);
//         return;
//       }
//     }

//     const profileResponse = await fetch(`https://api.github.com/users/${username}`);
//     const profileJson = await profileResponse.json();

//     if (!profileResponse.ok) {
//       console.log("Error fetching user profile");
//       return;
//     }

//     const repositoriesResponse = await fetch(profileJson.repos_url);
//     const repoJson = await repositoriesResponse.json();

//     if (!repositoriesResponse.ok) {
//       console.log("Error fetching repositories");
//       return;
//     }

//     setData(profileJson);
//     setRepositories(repoJson);

//     if (userProfile) {
//       localStorage.setItem("userProfile", JSON.stringify([...userProfile, profileJson]));
//     } else {
//       localStorage.setItem("userProfile", JSON.stringify([profileJson]));
//     }

//     if (userRepo) {
//       localStorage.setItem("repos", JSON.stringify([...userRepo, repoJson]));
//     } else {
//       localStorage.setItem("repos", JSON.stringify([repoJson]));
//     }
//   };


const fetchProfile = async () => {
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  const userRepo = JSON.parse(localStorage.getItem("repos"));

  // console.log(userProfile[0].login);
  if (userProfile && userRepo) {

    const filterProfile = userProfile.find((profile) => {
      return username === profile.us
    });
    console.log(filterProfile);
    const filterRepo = userRepo.find(repo => username == repo.us);
    if (filterProfile && filterRepo) {
      setData(filterProfile);
      // console.log(filterRepo);
      setRepositories(filterRepo);
      return;
    }
  }
  else
  {
    let profileResponse = await fetch(`https://api.github.com/users/${username}`);
  const  profilesJson = await profileResponse.json();
  console.log("hello");
  if (!profileResponse.ok) {
    console.log("Error fetching user profile");
    return;
  }
  const profileJson = {
    ...profilesJson,
    us:username,
  }

  const repositoriesResponse = await fetch(profileJson.repos_url);
  const repositoriesJson = await repositoriesResponse.json();

  if (!repositoriesResponse.ok) {
    console.log("Error fetching repositories");
    return;
  }

  const repoJson = {
    ...repositoriesJson,
    us: username
  };

  setData(profileJson);
  setRepositories(repoJson);

  if (userProfile) {
    const updatedUserProfile = [...userProfile, profileJson];
    localStorage.setItem("userProfile", JSON.stringify(updatedUserProfile));
  } else {
    localStorage.setItem("userProfile", JSON.stringify([profileJson]));
  }

  if (userRepo) {
    const updatedUserRepo = [...userRepo, repoJson];
    localStorage.setItem("repos", JSON.stringify(updatedUserRepo));
  } else {
    localStorage.setItem("repos", JSON.stringify([repoJson]));
  }
  }

  
};

  const submitHandler = e => {
    e.preventDefault();
    fetchProfile();
  };

  return (
    <>
      <div style={{ padding: 20 }}>
        <div className="ui search">
          <div className="ui icon input">
            <i className="search icon"></i>
            <input
              className="prompt"
              placeholder="search username here..."
              type="text"
              value={username}
              onChange={onChangeHandler}
            />
          </div>

          <button
            className="ui primary button"
            type="submit"
            onClick={submitHandler}
          >
            <i className="github icon"></i>
            Search
          </button>
          <Card data={data} repositories={repositories} />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
