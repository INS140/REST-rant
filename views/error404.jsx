const React = require('react')
const Def = require('./default')

function Error404() {
    return (
        <Def>
            <h1>404: Page Not Found</h1>
            <p>Oopsy! Seems like somethin went wrong ...</p>
            <div style={{ position: 'relative' }}>
                <img src="/images/ashamed-pup.jpg" alt="ashamed pup" width="300" />
                <div className='attribution'>
                    Photo found on <a href='https://sputniknews.com/20200115/absolutely-cute-guilty-dog-1078042657.html'>Sputniknews</a>
                </div>
            </div>
            <a href='/'>Return to home page</a>
        </Def>
    )
}

module.exports = Error404