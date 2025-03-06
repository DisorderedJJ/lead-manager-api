import { Response, Request, NextFunction } from "express";
import { LeadData } from "../utils/types/types";
import AsyncControllerHandle from "../utils/decorators/AsyncControllerErrorDecorator";
import LoggerConfig from "../config/LoggerConfig";
import ILeadService from "../services/ILeadService";
import LeadService from "../services/LeadService";

class LeadController {
  private leadService: ILeadService;

  constructor() {
    this.leadService = LeadService.GetInstance();
  }

  @AsyncControllerHandle
  async addNewLead(req: Request, res: Response, next: NextFunction) {
    const payLoad: LeadData = req.body;
    console.log(req.body);
    LoggerConfig.getLogger().info(`Request came to save new lead for name: ${payLoad.name}`);
    const response: LeadData = await this.leadService.addNewLead(payLoad);
    res.status(200).send(response);
  }

  @AsyncControllerHandle
  async getLead(req: Request, res: Response, next: NextFunction) {
    LoggerConfig.getLogger().info(`Request came to fetch all leads`);
    const response: Array<LeadData> = await this.leadService.getLeads();
    res.status(200).send(response);
  }
}

export default LeadController;
