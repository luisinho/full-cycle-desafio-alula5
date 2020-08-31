import { Controller, Get } from '@nestjs/common';

@Controller()
export class ActionController {  
  
  action(): void {
    console.log('action 9')
  }
}
