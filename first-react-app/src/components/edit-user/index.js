import {useParams} from 'react-router-dom'

const EditUser = () => {
    const currentUserId = useParams().userId;
    return <span>Editing User with id: {currentUserId}</span>
}

export default EditUser;