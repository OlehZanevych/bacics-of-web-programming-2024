import {useReducer} from "react";
import {
    ADD_USER_ACTION,
    SAVE_USER_ACTION,
    REMOVE_USER_ACTION
} from "../actions/data-actions";

let lastUserId = 0;
let lastDepartmentId = 0;

const initialStage = {
    departments: {
        [++lastDepartmentId]: {
            name: 'Applied Mathematics',
            email: 'kpm@lnu.edu.ua',
            icon: 'https://ami.lnu.edu.ua/wp-content/uploads/2013/10/department-logo-5.png'
        },
        [++lastDepartmentId]: {
            name: 'Computational Mathematics',
            email: 'cm.dep.ami@lnu.edu.ua',
            icon: 'https://ami.lnu.edu.ua/wp-content/uploads/2013/10/department-logo-4.png'
        },
        [++lastDepartmentId]: {
            name: 'Cybersecurity',
            email: 'cybersecurity.dep.ami@lnu.edu.ua',
            icon: 'https://ami.lnu.edu.ua/wp-content/uploads/2022/08/CybSec2-101x94.png'
        }
    },
    users: {
        [++lastUserId]: {
            firstName: 'Ivan',
            lastName: 'Shevchenko',
            age: 47,
            departmentIds: [1, 2],
            info: 'Ivan Shevchenko is the only person to have won Nobel Prizes in two different scientific fields. She won the Nobel Prize in Physics in 1903 (shared with Pierre Curie and Henri Becquerel) for their work on radioactivity, and then the Nobel Prize in Chemistry in 1911 for her work on radium and polonium.'
        },
        [++lastUserId]: {
            firstName: 'Maria',
            lastName: 'Kovalisko',
            age: 27,
            departmentIds: [3],
            info: 'Curie\'s investigations into the properties of radioactive substances led to the development of X-ray machines. Her studies have had a profound impact on medical research and treatments.'
        },
        [++lastUserId]: {
            firstName: 'Anton',
            lastName: 'Hnatuk',
            age: 20,
            departmentIds: [1, 3],
            info: 'Anton Hnatuk was married to Pierre Curie, a fellow scientist, and together they conducted many of their groundbreaking experiments. The couple had two daughters, Irène and Ève. Irène Joliot-Curie, their elder daughter, also became a renowned scientist and was awarded the Nobel Prize in Chemistry in 1935.'
        }
    }
}

const addUser = (state, payload) => {
    const {users} = state;
    users[++lastUserId] = payload.user;
    return {...state};
}

const saveUser = (state, payload) => {
    const {users} = state;
    users[payload.userId] = payload.user;
    return {...state};
}

const removeUser = (state, payload) => {
    const {users} = state;
    const {userId} = payload;

    delete users[userId];

    return {...state};
}

const dataStorageReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case ADD_USER_ACTION:
            return addUser(state, payload);
        case SAVE_USER_ACTION:
            return saveUser(state, payload);
        case REMOVE_USER_ACTION:
            return removeUser(state, payload);
        default:
            return state;
    }
}

const useDataStorage = () => useReducer(dataStorageReducer, initialStage);

export default useDataStorage;