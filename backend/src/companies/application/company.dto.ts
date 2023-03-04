export class Company {
  id: string;
  dataset_code: string;
  database_code: string;
  name: string;
  description: string;
  type: string;

  constructor(id?, dataset_code?, database_code?, name?, description?, type?) {
    this.id = id;
    this.dataset_code = dataset_code;
    this.database_code = database_code;
    this.name = name;
    this.description = description;
    this.type = type;
  }
}
