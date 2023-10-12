import UserItem from "../user-item";

const users = [{
    firstName: 'Ivan',
    lastName: 'Shevchenko',
    age: 47
}, {
    firstName: 'Maria',
    lastName: 'Kovalisko',
    age: 27
}, {
    firstName: 'Anton',
    lastName: 'Hnatuk',
    age: 20
}]

const Users = () => {
    const userItems = users.map((user, index) => <UserItem key={index} userData={user}/>)

    return (
        <>
            <h1>Users</h1>
            {userItems}
        </>
    )
}

export default Users;