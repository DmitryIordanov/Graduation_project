import axios from "axios";

export default class PostServise{

    static async getAll(page){
        const response = await axios.get('http://127.0.0.1:8000/api/posts', {params: {page: page}})
        return response
    }
    static async getTrash(){
        const response = await axios.get('http://127.0.0.1:8000/api/posts/trash')
        return response
    }
    static async getRestore(id){
        const response = await axios.get('http://127.0.0.1:8000/api/posts/_restore=' + id)
        return response
    }
    static async getTotalPage(){
        const response = await axios.get('http://127.0.0.1:8000/api/posts/lastPage')
        return response
    }
    static async getById(id){
        const response = await axios.get('http://127.0.0.1:8000/api/posts/_id=' + id)
        return response
    }
    static async getCommentPostById(id){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response
    }
    static async getDeletePostById(id){
        const response = await axios.get('http://127.0.0.1:8000/api/posts/_delete=' + id)
        return response
    }
    static async getCreatePostById(title, body, image){
        const response = await axios.get(`http://127.0.0.1:8000/api/posts/_create=${title}&${body}&${image}`)
        return response
    }
}
