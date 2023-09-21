const users = [];

const addUser =() => {
    const firstName = getInputValue('first-name');
    const middleName = getInputValue('middle-name');
    const lastName = getInputValue('last-name');
    const profilePhotoUrl = document.getElementById('profile-photo').src;

    const user = {firstName, middleName, lastName, profilePhotoUrl};

    users.push(user);

    renderUsers();
}

const getInputValue = elemId => document.getElementById(elemId).value;

const renderUsers = () => {
    const usersSectionElem = document.getElementById('users');
    usersSectionElem.innerHTML = '';

    const userElems = users.map(createUserElem);

    userElems.forEach(userElem => {
        usersSectionElem.appendChild(userElem);
    });
}

const createUserElem = user => {
    const userElem = document.createElement('div');

    const {firstName, middleName, lastName, profilePhotoUrl} = user;

    const titleElem = document.createElement('h1');
    titleElem.innerHTML = `${firstName} ${middleName} ${lastName}`;
    userElem.appendChild(titleElem);

    if (profilePhotoUrl) {
        const profilePhotoLabelElem = document.createElement('label');
        profilePhotoLabelElem.innerText = 'Photo:';
        userElem.appendChild(profilePhotoLabelElem);

        const profilePhotoElem = document.createElement('img');
        profilePhotoElem.src = profilePhotoUrl;
        userElem.appendChild(profilePhotoElem);
    }

    return userElem;
}

const readProfilePhoto = profilePhotoInput => {
    if (!profilePhotoInput) {
        return;
    }

    const profilePhotoFile = profilePhotoInput.files[0];
    if (!profilePhotoFile) {
        return;
    }

    const fileReader = new FileReader();
    fileReader.onload = e => {
        updateProfilePhoto(e.target.result);
    }
    fileReader.readAsDataURL(profilePhotoFile);
}

const updateProfilePhoto = photoUrl => {
    document.getElementById('profile-photo').setAttribute('src', photoUrl);
}
