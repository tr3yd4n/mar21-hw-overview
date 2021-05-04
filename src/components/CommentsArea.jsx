import CommentList from './CommentList'


const CommentsArea = (props) => (
    <div>
        <CommentList asin={props.asin} />
    </div>
)

export default CommentsArea