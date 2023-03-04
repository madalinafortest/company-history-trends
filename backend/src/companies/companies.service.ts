import { Injectable } from '@nestjs/common';
import { Company } from './application/company.dto';
import { HttpService } from '@nestjs/axios';
import { COMPANY_API_BASE_URL } from './application/constants';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CompaniesService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<Company[]> {
    //add pagination
    //sort asc
    const companiesData = await firstValueFrom(
      this.httpService.get(this.getCompaniesURL(), {
        headers: {
          Accept: 'application/json',
        },
      }),
    );

    return companiesData.data.datasets.map(this.toDomainDTO);
  }

  async findById(companyId: string): Promise<Company> {
    const foundedCompany = await firstValueFrom(
      this.httpService.get(this.getCompanyURL(companyId), {
        headers: {
          Accept: 'application/json',
        },
      }),
    );
    return this.toDomainDTO(foundedCompany.data.dataset);
  }

  private getCompaniesURL(): string {
    return `${COMPANY_API_BASE_URL}?database_code=WIKI&api_key=${process.env.API_KEY}&order=asc`;
  }

  private getCompanyURL(companyId: string): string {
    return `${COMPANY_API_BASE_URL}${companyId}?api_key=${process.env.API_KEY}`;
  }

  private toDomainDTO(apiResponse): Company {
    return new Company(
      apiResponse.id,
      apiResponse.dataset_code,
      apiResponse.database_code,
      apiResponse.name,
      apiResponse.description,
      apiResponse.type,
    );
  }
}
