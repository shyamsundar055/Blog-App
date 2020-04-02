import API from './apiutilities'; 


const APIService = {
    getPostData: function(postId){
        return API.get('posts'+(postId ? "/"+postId : "")).then(res => {
            return res.data;
        }) 
    },
    getPostComments:function(postId){
        return API.get('comments?postId='+postId).then(res => {
            return res.data;
        }) 
    }
}

export default APIService;