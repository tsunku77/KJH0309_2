const postStore = {
    namespaced:true,
    state:{
        postList:[
            {
                title: 'vuex 쉽게 알아보기',
                author: '도로시'
            },
            {
                title: 'axios 알아보기',
                author: '도로시'
            },
            {
                title: 'react 알아보기',
                author: '토토'
            }
        ]
    },
    getters:{
        GE_POST_LIST:state =>state.postList
    },
    mutations:{
        MU_POST_LIST:(state,payload) =>{
            state.postList = payload
        }
    },
    actions:{
        AC_USER_NAME: ({commit},payload) => {
            commit('MU_POST_LIST',payload)
        }
    }
}
export default postStore