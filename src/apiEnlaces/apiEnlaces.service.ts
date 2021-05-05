import { Injectable } from '@nestjs/common';
import { EnlacesService } from '../db/enlaces/enlaces.service';

@Injectable()
export class apiEnlacesService {
  constructor(
    private enlacesService: EnlacesService,
  ) {}

  async findAll(){
    const data = await this.enlacesService.findAll();
    const result = {
      data: {
        data: data,
      },
      code: 200,
    };
    return result; 
  }

  async findOneId(id: number){
    const data = await this.enlacesService.findOneId(id);
    const result = {
      data: {
        data: data,
      },
      code: 200,
    };
    return result; 
  } 

  async updateEnlacestId(id: number, body){
    const data = await this.enlacesService.updateEnlacetId(id, body);
    const result = {
      data: {
        data: data,
      },
      code: 200,
    };
    return result; 
  }
}
