import { Injectable } from '@nestjs/common';
import { TextosService } from '../db/textos/textos.service';

@Injectable()
export class apiTextosService {
  constructor(
    private textosService: TextosService,
  ) {}

  async findAllText(){
    const data = await this.textosService.findText();
    const result = {
      data: {
        data: data,
      },
      code: 200,
    };
    return result; 
  }

  async findTextId(id: number){
    const data = await this.textosService.findTextId(id);
    const result = {
      data: {
        data: data,
      },
      code: 200,
    };
    return result; 
  } 

  async updateTextId(id: number, body){
    const data = await this.textosService.updateTextId(id, body);
    const result = {
      data: {
        data: data,
      },
      code: 200,
    };
    return result; 
  }
}
