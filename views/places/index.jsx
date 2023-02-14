const React = require('react')
const Def = require('../default')

function Index(props) {
    return (
        <Def>
            <main>
                <h1>PLACES TO 'RANT' ABOUT</h1>
                <div className='row'>
                    {props.places.map((place, index) => {
                        return (
                            <div key={index} className="col-sm-6">
                                <h2>{place.name}</h2>
                                <p className='text-center'>{place.cuisines}</p>
                                {(place.pic !== '/images/default-restaurant.png')
                                    ? <div className='img-container'>
                                        <img className="restaurant-img" src={place.pic} alt={place.name} />
                                        <div className='attribution'>
                                            Image sourced from <a href={place.attr}>{place.source}</a>
                                        </div>
                                    </div>
                                    : <img className="restaurant-img" src={place.pic} alt={place.name} />
                                }
                                <p className='text-center'>Located in {place.city}, {place.state}</p>
                            </div>
                        )
                    })}
                </div>
            </main>
        </Def>
    )
}

module.exports = Index