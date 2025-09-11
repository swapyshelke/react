import React from 'react'

const Two = () => {

    const movies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "Pulp Fiction",
  "Forrest Gump"
];

  return (
    <div>
        <ul>
            {
                movies.map((movie) => (
                    <li >{movie}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Two