import express from "express";
import BaseController from "../utils/BaseController";
import {
  shipService
} from "../services/ShipService";
import {
  BadRequest
} from "../utils/Errors";

export class ShipController extends BaseController {
  constructor() {
    super("api/ships");
    this.router
      .get("", this.getAll)
      .get("/:shipId", this.getById)
      .post("", this.create)
      .put("/:shipId", this.edit)
      .delete("/:shipId", this.remove)
  }

  async remove(req, res, next) {
    try {
      let ship = await shipService.remove(req.params.shipId)
      res.send(ship)
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      let ships = await shipService.getAll()
      res.send(ships)
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let ship = await shipService.getById(req.params.shipId)
      if (!ship) {
        throw new BadRequest("Invalid shipId")
      }
      res.send(ship)
    } catch (error) {
      next(error)
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

  async edit(req, res, next) {
    try {
      let ship = await shipService.edit(req.params.shipId, req.body)
      res.send(ship)
    } catch (error) {
      next(error)
    }
  }

}