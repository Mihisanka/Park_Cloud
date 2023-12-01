import React from 'react';

function TeamMember({ name, role, description, email }) {
  return (
    <div className="column">
      <div className="card">
        <img src={`/${name}.jpg`} alt={name} style={{ width: '100%' }} />
        <div className="container">
          <h2>{name}</h2>
          <p className="title">{role}</p>
          <p>{description}</p>
          <p>{email}</p>
          <p>
            <button className="button">Contact</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
