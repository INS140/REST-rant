const React = require('react')
const Def = require('../default')

function Show ({ place, id }) {
    return (
        <Def>
          <main>
            <h1>{ place.name }</h1>
            <div className='img-container'>
                <img className="restaurant-img" src={place.pic} alt={place.name} />
                <div className='attribution'>
                    Image sourced from <a href={place.attr}>{place.source}</a>
                </div>
            </div>
            <div>
                <h2>Rating</h2>
                <p>no ratings yet ...</p>
            </div>
            <div>
                <h2>Description</h2>
                <p>Specialties: { place.cuisines }</p>
            </div>
            <div>
                <h2>Comments</h2>
                <p>no comments yet ...</p>
            </div>
            <a href={`/places/${id}/edit`} className="btn btn-warning">Edit</a>
            <form method="POST" action={`/places/${id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">Delete</button>
            </form>
          </main>
        </Def>
    )
}

module.exports = Show
