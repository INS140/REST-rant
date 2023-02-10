const React = require('react')

function Def(props) {
    return (
        <html lang='en'>
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>REST-rant</title>
            </head>
            <body>
                {props.children}
            </body>
        </html>
    )
}

module.exports = Def