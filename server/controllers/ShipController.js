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
  async getAll(req, res, next) {
    try {
      let ships = await shipService.getAll()
      res.send(ships)
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let ship = await shipService.create(req.body);
      res.send(ship);
    } catch (error) {
      next(error);
    }
  }
}