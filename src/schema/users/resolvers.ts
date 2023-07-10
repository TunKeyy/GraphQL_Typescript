// App Imports
import { User } from "../../models/user"

// Get thoughts by ID
export async function getUserById(parentValue: any, args: any) {
    return await User.findOne({ where: { id: args.id }})
}

// Get all users
export async function getAllUser() {
    return await User.findAll()
}

// Create users
export async function create(parentValue: any, args: any) {
    return await User.create({
        username: args.username,
        password: args.password
    })
}

// Delete thought
export async function remove(parentValue: any, args: any) {
    return await User.destroy({ where: { id: args.id }})
}