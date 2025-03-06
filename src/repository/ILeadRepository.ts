import { LeadData } from "../utils/types/types";

interface ILeadRepository {
  saveNewLead(newLeadPayload: LeadData): Promise<LeadData>;
  getLeads(): Promise<Array<LeadData>>;
}

export default ILeadRepository;
