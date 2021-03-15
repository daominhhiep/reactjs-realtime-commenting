import React, {useState, useEffect} from 'react';
import CommentBox from './CommentBox';
import Comments from './Comments';

function App() {
    const [comments, setComments] = useState([]);

    useEffect(() =>{
        /* global Ably */
        const channel = Ably.channels.get('comments');
        channel.attach();
        channel.once('attached', () => {
            channel.history((err, page) => {
                const comments = Array.from(page.items, item => item.data);
                setComments(comments)
                channel.subscribe((msg, err) => {
                    const commentObject = msg['data'];
                    handleAddComment(commentObject);
                });
            });
        });
    },[])

    const handleAddComment = (comment) => {
        setComments(comments => {
            return [comment].concat(comments)
        });
    }

    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <CommentBox handleAddComment={handleAddComment}/>
                        <Comments comments={comments}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App;