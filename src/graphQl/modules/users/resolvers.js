import User from '../../../models/user';

export default {
    Query: {
        users: async()=> await User.find({}),
        user: async (_, {id})=> await User.findOne({_id: id})
    },
    Mutation:{
        createUser: (_, {data})=> User.create(data),
        updateUser: (_, {id, data})=> User.findOneAndUpdate(id, data, {new: true}),
        deleteUser: async(_, {id})=> !!(await User.findOneAndDelete(id))
    }
}