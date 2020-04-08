import {
    dbContext
} from "../db/DbContext";
import {
    BadRequest
} from "../utils/Errors";

class CommentService {
    async remove(id) {
        let comment = await dbContext.Comments.findByIdAndDelete(id)
        return comment;
    }

    async getById(params, id) {
        let comment = await dbContext.Comments.find(id)
        if (!comment) {
            throw new BadRequest("Invalid comment id")
        }
        return comment;
    }

    async edit(id, body) {
        let comment = await dbContext.Comments.findByIdAndUpdate(id, body, {
            new: true
        })
        return comment;
    }

    async create(body) {
        let comment = await dbContext.Comments.create(body);
        return comment;
    }

    async getAll() {
        let comments = await dbContext.Comments.find();
        return comments

    }

}

export const commentService = new CommentService();