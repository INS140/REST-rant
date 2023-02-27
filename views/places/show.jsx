const React = require('react')
const Def = require('../default')
const Comments = require('./comments')
const CommentForm = require('./commentForm')
const Rating = require('./rating')

function Show ({ place }) {

    // These React Hooks are not working as intended, I am looking into SSR React to see how I can fix these issues

    // UPDATE: Servers produce 'static' pages, so React components do not rerender ...

    // const [addComment, setAddComment] = React.useState(false)

    // function updateCommentView() {
    //     console.log('HELLO!!!!!!!!!!')
    //     console.log(addComment)
    //     setAddComment(!addComment)
    // }

    const sumStars = place.comments.length
        ? place.comments.reduce((sum, comment) => sum + comment.stars, 0)
        : null
    const stars = !sumStars ? null : sumStars / place.comments.length

    return (
        <Def>
          <main>
            <h1>{ place.name }</h1>
            {
                (place.pic !== '/images/default-restaurant.png')
                    ? <div className='img-container'>
                        <img className="restaurant-img" src={place.pic} alt={place.name} />
                        <div className='attribution'>
                            Image sourced from <a href={place.srcUrl}>{place.srcName}</a>
                        </div>
                    </div>
                    : <img className="restaurant-img" src={place.pic} alt={place.name} />
            }
            <h3>{place.showEstablished()}</h3>
            <hr />
            <div>
                <h2>Rating</h2>
                {
                    !stars
                        ? <p>no ratings yet ...</p>
                        : <Rating numStars={stars.toFixed(1)}/>
                }
            </div>
            <div>
                <h2>Description</h2>
                <p>Located in {place.city}, {place.state}</p>
                <p>Specialties: {place.cuisines}</p>
                {place.founded && <p>Founded: {place.founded}</p>}
            </div>
            <div>
                <h2>Comments</h2>
                {
                    place.comments.length
                        ? <Comments place={place} />
                        : <p className="inactive">No comments yet!</p>
                }
                {/* {
                    addComment
                        ? <CommentForm />
                        : <button id="add" onClick={updateView}>Comment</button>
                } */}
                <CommentForm place={place} />
            </div>
            <a href={`/places/${place.id}/edit`} className="btn btn-warning">Edit</a>
            <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">Delete</button>
            </form>
          </main>
        </Def>
    )
}

module.exports = Show