const React = require('react')
const Def = require('./default')

function Error404() {
    return (
        <Def>
            <h1>404: Page Not Found</h1>
            <p>Oopsy! Seems like we're lost looking for this page ...</p>
        </Def>
    )
}

module.exports = Error404