import React from 'react';

function CommentBox() {

    const addComment = (e) => {
        e.preventDefault();
        const comment = e.target.elements.comment.value.trim();
        const name = e.target.elements.name.value.trim();
        if (name && comment) {
            const commentObject = {name, comment};
            /*global Ably*/
            const channel = Ably.channels.get('comments');
            channel.publish('add_comment', commentObject, err => {
                if (err) {
                    console.log('Unable to publish message; err = ' + err.message);
                }
            });
            e.target.elements.comment.value = '';
            e.target.elements.name.value = '';
        }
    }

    return (
        <>
            <h1 className="title">Kindly leave your thoughts below</h1>
            <form onSubmit={addComment}>
                <div className="field">
                    <div className="control">
                        <input type="text" className="input" name="name" placeholder="Your name"/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <textarea className="textarea" name="comment" placeholder="Add a comment"/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-primary">Submit</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default CommentBox;