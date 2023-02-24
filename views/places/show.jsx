const React = require('react')
const Def = require('../default')

function Show ({ place }) {

    // These React Hooks are not working as intended, I am looking into SSR React to see how I can fix these issues

    // const [addComment, setAddComment] = React.useState(false)

    // function updateCommentView() {
    //     console.log('HELLO!!!!!!!!!!')
    //     console.log(addComment)
    //     setAddComment(!addComment)
    // }

    let addComment = false

    const updateView = () => {addComment = !addComment}

    function CommentForm() {
        // const [inputs, setInputs] = React.useState({
        //     author: '',
        //     stars: 0.5,
        //     content: '',
        //     rant: false
        // })
    
        // React.useEffect(() => {
        //     console.log('RERENDER')
        // }, [inputs])
    
        // function handleInputChange(event) {
        //     const { value, name } = event.target
        //     setInputs(prevInputs => ({...prevInputs, [name]: value}))
        // }
    
        // function handleCheckedChange(event) {
        //     const { checked, name } = event.target
        //     setInputs(prevInputs => ({...prevInputs, [name]: checked}))
        // }
    
        return (
            <form method='POST' action={`/places/${place.id}/comment`} className='comment-form'>
                <legend className='comment-legend'><h4>Add A Comment</h4></legend>
                <div className='comment-auth'>
                    <label htmlFor='author'>Author: </label>
                    <input
                        type='text'
                        name='author'
                        // value={inputs.author}
                        // onChange={handleInputChange}
                    />
                </div>
                <div className='comment-stars'>
                    <label htmlFor="stars">Rating: </label>
                    <input
                        type="number"
                        name='stars'
                        step='0.5'
                        min='0.5'
                        max='5'
                        defaultValue='0.5'
                        // value={inputs.stars}
                        // onChange={handleInputChange}
                    />
                </div>
                <div className='comment-rant'>
                    <label htmlFor="rant">Rant: </label>
                    <input
                        type="checkbox"
                        name='rant'
                        value='rant'
                        // checked={inputs.rant}
                        // onChange={handleCheckedChange}
                    />
                </div>
                <div className='comment-content'>
                    <label htmlFor="content">Content: </label>
                    <textarea
                        name="content"
                        rows='5'
                        // value={inputs.content}
                        // onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className='comment-submit'>
                    <button type='submit'>Comment</button>
                </div>
            </form>
        )
    }

    function Comments() {
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
                <p>no ratings yet ...</p>
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
                        ? <Comments />
                        : <h3 className="inactive">No comments yet!</h3>
                }
                {/* {
                    addComment
                        ? <CommentForm />
                        : <button id="add" onClick={updateView}>Comment</button>
                } */}
                <CommentForm />
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