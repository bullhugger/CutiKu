import {firebase} from '@firebase/app';
import '@firebase/firestore';

export async function getUsers(usersRetreived) {
    var userProfile = [];

    var snapshot = await firebase.firestore()
        .collection('users')
        .get()

    snapshot.forEach((doc) => {
        const userItem = doc.data();
        userItem.id = doc.id;
        userList.push(userItem);
    });

    console.log(usersRetreived)

  usersRetreived(userProfile);
}