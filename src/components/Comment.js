import React from 'react';

function Comment(props) {
    const {comment} = props;

    return (
        <article className="media">
            <figure className="media-left">
                <p className="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="Avatar"/>
                </p>
            </figure>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>{comment.name}</strong>
                        <br/>
                        {comment.comment}
                    </p>
                </div>
            </div>
        </article>
    );
}

export default Comment;