import mongoose from 'mongoose';

export default function repositoryController(model = mongoose.Model) {
    return {
        findOne: async (query = {}) => {
            return await model.findOne(query);
        },
        find: async (query = {}) => {
            return await model.find(query);
        },
        create: async (data = {}) => {
            if (!data || !Object.keys(data).length)
                throw new Error("No data provided");
            return await model.create(data);
        },
        update: async (query = {}, data = {}) => {
            if (!data || !Object.keys(data).length)
                throw new Error("No data provided");
            return await model.updateOne(query, data);
        },
    }
}