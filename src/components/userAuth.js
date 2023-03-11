const auth = localStorage?.getItem('user');
const userAuth = JSON.parse(auth)


export default userAuth;