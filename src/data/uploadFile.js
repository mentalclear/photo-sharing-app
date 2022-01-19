import firebase from "firebase/compat/app";

export const uploadFile = async (url, FormData) => {
    const user = firebase.auth().currentUser;
    if(!user) {
        console.log("Error: trying to make an unauthed request")
        return null;
    }

    const response = await fetch(url, {
        method: 'post',
        body: FormData,
        headers: {AuthToken: await user.getIdToken() },
    });

    return response;
}