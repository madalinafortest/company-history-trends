import { Controller, Get, Param } from '@nestjs/common';
import { Company } from './application/company.dto';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get(':id')
  findById(@Param('id') id: string): Promise<Company> {
    return this.companiesService.findById(id);
  }

  @Get(':id/data')
  findCompanyData(@Param('id') id: string): Promise<Company> {
    return this.companiesService.findCompanyData(id);
  }

  @Get()
  findAll(): Promise<Company[]> {
    return this.companiesService.findAll();
  }
}
