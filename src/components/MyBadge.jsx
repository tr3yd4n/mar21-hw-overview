import { Badge } from 'react-bootstrap'

const MyBadge = (props) => {

    let badgeColor = props.book.category === 'fantasy' ? 'success'
        : props.book.category === 'history'
            ? 'info' : 'danger'

    return (
        <Badge
            variant={badgeColor}>
            {props.book.price}
        </Badge>
    )
}

export default MyBadge