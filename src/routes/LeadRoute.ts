import express from "express";
import LeadController from "../controllers/LeadController";

const leadRoute = express.Router({ mergeParams: true });
const leadController: LeadController = new LeadController();

leadRoute.post("/", leadController.addNewLead.bind(leadController));
leadRoute.get("/", leadController.getLead.bind(leadController));

export default leadRoute;
