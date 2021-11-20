import Post from '../../../models/post';

export default {
    Query: {
        posts: async()=> await Post.find({}),
        post: async(_, {id})=> await Post.findOne({_id: id})
    },
    Mutation:{
        createPost: (_, {data})=> Post.create(data),
        updatePost: (_, {id, data})=> Post.findOneAndUpdate(id, data, {new: true}),
        deletePost: async(_, {id})=> !!(await Post.findOneAndDelete(id))
    }
}