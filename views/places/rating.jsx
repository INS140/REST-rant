const React = require('react')

function Rating({ numStars }) {
    const starWidth = 100 - numStars / 5 * 100

    return (
        <div className='rating-container'>
            <h4 className='rating'>{numStars}</h4>
            <div className='star-container'>
            <span className='stars'>⭐⭐⭐⭐⭐</span>
            <span className='star-cover' style={{width: `${starWidth}%`}}></span>
            </div>
        </div>
    )
}

module.exports = Rating