// import React from 'react'
// import { Link } from 'react-router-dom'
// const Card = ({user}) => {
//   return (
//  <>
//   <div className='card'>
//     <div className="lines"></div>
//     <div className='imgBox'>
//       <img src={user.avatar_url}/>
//     </div>
//     <div className='content'>
//       <div className='details'>
//         <h2>{user.login}<br/> <span> Senior UI/UX Designer</span></h2>
//       <div className='data'>
//         <h3>{user.repos_url.length}<br/> <span>Repos</span></h3>
//         <h3>{user.followers_url.length}<br/> <span>Followers</span></h3>
//         <h3>{user.following_url.length}<br/> <span>Following</span></h3>
//       </div>
//       <div className='actionBtn'>
//       <Link to={`/profiledetail/${user.login}`}>  <button>Detail</button></Link>
        
//       </div>
//       </div>
//     </div>
//   </div>
//  </>
//   )
// }

// export default Card


import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data , repositories }) => {
  // console.log(data);
  // console.log(repositories);

  return (
    <div className='card'>
      <div className="lines"></div>
      <div className='imgBox'>
        <img src={data.avatar_url} alt="User Avatar" />
      </div>
      <div className='content'>
        <div className='details'>
          <h2>{data.login}<br/> <span>Senior UI/UX Designer</span></h2>
          <div className='data'>
          <h3>{repositories.length}<br/> <span>Repos</span></h3>
         <h3>{data.followers}<br/> <span>Followers</span></h3>
         <h3>{data.following}<br/> <span>Following</span></h3>
          </div>
          <div className='actionBtn'>
            <Link to={`/profiledetail/${data.login}`}>
              <button>Detail</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
