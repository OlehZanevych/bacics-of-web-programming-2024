import './style.css'

const UserItem = ({userData}) => {
    const {firstName, lastName, age} = userData;
    return (
        <div className='user_item'>
            <span className='user_item__text'>{firstName}</span>
            <span className='user_item__text'>{lastName}</span>
            <span className='user_item__name'>{age}</span>
        </div>
    )
}

export default UserItem;