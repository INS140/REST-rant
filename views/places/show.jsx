const React = require('react')
const Def = require('../default')

function Show ({ place }) {
    return (
        <Def>
          <main>
            <h1>{ place.name }</h1>
            {(place.pic !== '/images/default-restaurant.png')
                ? <div className='img-container'>
                    <img className="restaurant-img" src={place.pic} alt={place.name} />
                    <div className='attribution'>
                        Image sourced from <a href={place.srcUrl}>{place.srcName}</a>
                    </div>
                </div>
                : <img className="restaurant-img" src={place.pic} alt={place.name} />
            }
            <div>
                <h2>Rating</h2>
                <p>no ratings yet ...</p>
            </div>
            <div>
                <h2>Description</h2>
                <p>Located in {place.city}, {place.state}</p>
                <p>Specialties: {place.cuisines}</p>
            </div>
            <div>
                <h2>Comments</h2>
                <p>no comments yet ...</p>
            </div>
            <a href={`/places/${place.id}/edit`} className="btn btn-warning">Edit</a>
            <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">Delete</button>
            </form>
          </main>
        </Def>
    )
}

module.exports = Show
