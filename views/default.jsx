const React = require('react')

function Def(props) {
    return (
        <html lang='en'>
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
                <link rel="stylesheet" href="/css/styles.css" />
                <title>REST-rant</title>
            </head>
            <body>
                {props.children}
            </body>
        </html>
    )
}

module.exports = Def