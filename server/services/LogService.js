import {
    dbContext
} from "../db/DbContext";
import {
    BadRequest
} from "../utils/Errors";

class LogService {
    async remove(id) {
        let log = await dbContext.Logs.findByIdAndDelete(id)
        return log;
    }

    async getById(params, id) {
        let log = await dbContext.Logs.findById(id).populate('ship', "name captain")
        if (!log) {
            throw new BadRequest("Invalid log id")
        }
        return log;
    }

    async edit(id, body) {
        let log = await dbContext.Logs.findByIdAndUpdate(id, body, {
            new: true
        })
        return log;
    }

    async create(body) {
        let log = await dbContext.Logs.create(body);
        return log;
    }

    async getAll() {
        let logs = await dbContext.Logs.find();
        return logs

    }

}

export const logService = new LogService();