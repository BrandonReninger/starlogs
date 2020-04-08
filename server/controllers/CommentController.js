import express from "express";
import BaseController from "../utils/BaseController";
import {
    commentService
} from "../services/CommentService";
import {
    BadRequest
} from "../utils/Errors";

export class CommentController extends BaseController {
    constructor() {
        super("api/comments");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getById)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.remove)
    }

    async remove(req, res, next) {
        try {
            let comment = await commentService.remove(req.params.id)
            res.send(comment)
        } catch (error) {
            next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            let comments = await commentService.getAll()
            res.send(comments)
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {
            let comment = await commentService.getById(req.params.id)
            if (!comment) {
                throw new BadRequest("Invalid log id")
            }
            res.send(comment)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            let comment = await commentService.create(req.body);
            res.send(comment);
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            let comment = await commentService.edit(req.params.id, req.body)
            res.send(comment)
        } catch (error) {
            next(error)
        }
    }

}