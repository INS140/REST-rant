const React = require('react')
const Def = require('../default')

function Index(props) {
    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {props.places.map((place, index) => {
                    return (
                        <div key={index}>
                            <h2>{place.name}</h2>
                            <img src={place.pic} alt={place.name} />
                        </div>
                    )
                })}
            </main>
        </Def>
    )
}

module.exports = Index