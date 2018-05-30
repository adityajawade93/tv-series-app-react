import React from 'react'

const Show = ({ show }) => {
  return (
    <div>
      <p>{ show.name }</p>
      <p>Premiered - { show.premiered || 'N/A' }</p>
      <p>Rating - {show.rating.average || 'N/A'}</p>
      <p>Episodes - {show._embedded.episodes.length}</p>
      <p>
        <img
          alt="Show"
          src={show.image.medium}
        />
      </p>
    </div>
  )
}

export default Show