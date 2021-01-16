import express from "express";
import BaseController from "../utils/BaseController";
import { burgersService } from "../services/BurgerService";

export class BurgerController extends BaseController {
  constructor() {
    super("api/burger");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }
  async getAll(_, res, next) {
    try {
      burgersService.getAll()
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
