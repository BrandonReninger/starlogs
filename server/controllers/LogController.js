import express from "express";
import BaseController from "../utils/BaseController";
import {
    logService
} from "../services/LogService";
import {
    BadRequest
} from "../utils/Errors";

export class LogController extends BaseController {
    constructor() {
        super("api/logs");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getById)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.remove)
    }

    async remove(req, res, next) {
        try {
            let log = await logService.remove(req.params.id)
            res.send(log)
        } catch (error) {
            next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            let logs = await logService.getAll()
            res.send(logs)
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {
            let log = await logService.getById(req.params.id)
            if (!log) {
                throw new BadRequest("Invalid log id")
            }
            res.send(log)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            let log = await logService.create(req.body);
            res.send(log);
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            let log = await logService.edit(req.params.id, req.body)
            res.send(log)
        } catch (error) {
            next(error)
        }
    }

}