import ILeadRepository from "../repository/ILeadRepository";
import PrismaLeadRepository from "../repository/PrismaLeadRepository";
import { LeadStatus } from "../utils/types/common";
import { LeadData } from "../utils/types/types";
import CommonValidator from "../utils/validators/CommonValidator";
import ILeadService from "./ILeadService";

class LeadService implements ILeadService {
  private static instance: ILeadService = new LeadService(PrismaLeadRepository.getInstance());
  private leadRepository: ILeadRepository;

  private constructor(leadRepository: ILeadRepository) {
    this.leadRepository = leadRepository;
  }

  static GetInstance(): ILeadService {
    return this.instance;
  }

  async addNewLead(payLoad: LeadData): Promise<LeadData> {
    CommonValidator.validateNotEmptyOrBlankString(payLoad.name, "name");
    CommonValidator.validateNotEmptyOrBlankString(payLoad.email, "email");
    CommonValidator.validateParamInADefinedValues(payLoad.status, Object.values(LeadStatus), "status");
    return await this.leadRepository.saveNewLead(payLoad);
  }

  async getLeads(): Promise<Array<LeadData>> {
    return await this.leadRepository.getLeads();
  }
}

export default LeadService;
