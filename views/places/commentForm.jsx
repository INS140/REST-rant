const React = require('react')

function CommentForm({ place }) {
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

module.exports = CommentForm