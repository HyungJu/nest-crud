import { Controller, Get } from '@nestjs/common';

@Controller('passes')
export class PassesController {
  @Get()
  getAll(): string {
    return 'Hi!';
  }
}
