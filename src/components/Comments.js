import Comment from './Comment';

function Comments(props) {
    const {comments} = props;
    const list = comments.map((comment, index) => {
        return <Comment key={index} comment={comment}/>
    })

    return (
        <section className="section">
            {list}
        </section>
    );
}

export default Comments;