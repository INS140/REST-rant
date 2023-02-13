const React = require('react')
const Def = require('./default')

function Home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div className='img-container'>
                    <img src='/images/stir-fry.jpg' alt='stir-fry' width="500" />
                    <div className='attribution'>
                        Photo found on <a href='https://www.mccormick.com/recipes/salads-sides/stir-fry-vegetables'>McCormick website</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = Home