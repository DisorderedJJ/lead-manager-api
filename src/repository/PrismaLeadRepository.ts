import prisma from "../config/DatabaseSource";
import Handle from "../utils/decorators/DBErrorHandlingDecorator";
import { LeadStatus } from "../utils/types/common";
import { LeadData } from "../utils/types/types";

import ILeadRepository from "./ILeadRepository";

class PrismaLeadRepository implements ILeadRepository {
  private static instance: ILeadRepository = new PrismaLeadRepository();

  static getInstance(): ILeadRepository {
    return this.instance;
  }

  private constructor() {}

  @Handle
  saveNewLead(newLeadPayload: LeadData): Promise<LeadData> {
    return prisma.lead.create({
      data: {
        name: newLeadPayload.name,
        email: newLeadPayload.email,
        status: Object.values(LeadStatus).find((leadStatus) => leadStatus === newLeadPayload.status) || LeadStatus.NEW,
      },
    });
  }

  @Handle
  getLeads(): Promise<Array<LeadData>> {
    throw prisma.lead.findMany();
  }
}

export default PrismaLeadRepository;
