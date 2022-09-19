import React from 'react';
import { Link } from 'react-router-dom';
import { StyledSingleAuthor } from './UI/Author.styled';

function Author({ author: { profile, url } }) {

  return (
    <StyledSingleAuthor>
      <div className='autImage'>
        <img src={profile.image} alt="" />
      </div>
      <div>
        <Link to={`/profile/${url}`}>{profile.full_name}</Link>
        <p>{profile.write_about}</p>
      </div>
    </StyledSingleAuthor>
  )
}

export default Author