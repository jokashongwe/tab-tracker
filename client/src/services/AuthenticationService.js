import Api from "./Api";

/*
* @usage
* AuthenticationService.register({
    email: 'jon@doe.com',
    password: 'bbb'
})
*/

export default {
  register(credentials) {
    return Api().post("/register", credentials);
  },
};
