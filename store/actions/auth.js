import Cookies from 'js-cookie'
import {common} from '../../helpers/common'
import Router from 'next/router' 


export function authAction(type , data) {

   // console.log('authAction data',type, data);

   return async (dipatch) => {

      if(type == 'login' || type == 'loginAdminAsUser' || type == 'loginAdminAsAdmin'){
         let targetUrl = {
            login : 'auth/login',
            loginAdminAsUser : 'auth/login_admin_as_user',
            loginAdminAsAdmin : 'auth/login_admin_as_admin',
         } 
         console.log(targetUrl[type]);
         await common.getAPI({
               url : targetUrl[type],
               method : 'GET',
               data : data
         }, (resp) => {
            let respData = resp.data
            Cookies.set('authToken', respData.token , { expires: 1 }) 
            // Cookies.set('email', respData.email  , 1)
            // Cookies.set('userId', respData.userId  , 1)
            // Router.push(respData.role == 1?"/admin/dashboard":"/user/studio-factory");
            Router.push("/dashboard");

            if(type != 'login'){
               dipatch( {
                  type: 'LOGOUT'
               })
            }

            dipatch( {
               type: 'LOGIN_SUCCESS',
               payload : respData
            })
         });
      
      }else if(type == 'registration'){
   
         await common.getAPI({
               url : 'auth/registration',
               method : 'POST',
               data : data
         }, (resp) => {
            Router.push("/auth/login");
         });
      
      }else if(type == 'forgot-password'){
         await common.getAPI({
               url : 'auth/torgot_password',
               method : 'GET',
               data : {
                  email : data.email
               }
         }, (resp) => {
            Router.push("/auth/login");
         });
      }
      
   }
 }


export function logout(){
   return (dipatch) => {
      Cookies.remove('authToken')
      // Cookies.remove('email' )
      // Cookies.remove('userId' )
      dipatch({
         type: 'LOGOUT',
      });
      
      Router.push("/");
      
      
   }
}
