import { LeadData } from "../utils/types/types";

interface ILeadService {
  addNewLead(payLoad: LeadData): Promise<LeadData>;
  getLeads(): Promise<Array<LeadData>>;
}

export default ILeadService;
