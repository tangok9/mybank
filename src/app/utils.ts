export var UTILS = {
   
    getUser(){
        let user = JSON.parse(localStorage.getItem('user'));
        return user != 'undefined'?user:null;
    },

    getToken(){
        let token = JSON.parse(localStorage.getItem('data'));
        return token != 'undefined'?token:null;
    }

}