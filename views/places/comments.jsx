const React = require('react')

function Comments({ place }) {
    return (
        <div className='comments-container'>
            {
                place.comments.map(comment => {
                    return (
                        <div key={comment.id} className="border w-100 m-1">
                            {
                                comment.rant
                                    ? <h2 className="rant">Rant! ☠</h2>
                                    : <h2 className='rave'>Rave! ☺</h2>
                            }
                            <h4>{comment.content}</h4>
                            <h3><stong>- {comment.author}</stong></h3>
                            <h4>Rating: {comment.stars}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

module.exports = Comments