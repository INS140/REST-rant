const React = require('react')

function Def(props) {
    return (
        <html lang='en'>
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="../styles.css" />
                <title>REST-rant</title>
            </head>
            <body>
                {props.children}
            </body>
        </html>
    )
}

module.exports = Def