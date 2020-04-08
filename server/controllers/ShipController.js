import express from "express";
import BaseController from "../utils/BaseController";
import {
  shipService
} from "../services/ShipService";

export class ShipController extends BaseController {
  constructor() {
    super("api/ships");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }
  async getAll(_, res, next) {
    try {
      return res.send(["value1", "value2"]);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}