export const getters = {
  // ispermission: status =>status.userInfo && status.userInfo.power && status.userInfo.power.some(v => {
  //   return ["ROLE_MANAGER"].includes(v.authority) 
  // }),
  ismanage: status =>  status.userInfo && status.userInfo.power && status.userInfo.power.some(v => {
    console.log(v.authority)
    return ["ROLE_SUPPER"].includes(v.authority)
  }),
  islogin: status =>  status.userInfo && status.userInfo.power && status.userInfo.power.some(v => {
    console.log(status.userInfo )
    return ["ROLE_USER"].includes(v.authority)
  }),

}
