import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { PassesService } from './passes.service';
import { Pass } from './passes.entity';
import { CreatePassDto } from './dto/create-pass.dto';
import { UpdatePassDto } from './dto/update-pass.dto';

@Controller('passes')
export class PassesController {
  constructor(private passesService: PassesService) {}

  @Get()
  getAll(): Promise<Pass[]> {
    return this.passesService.all();
  }

  @Get(':id')
  async getOne(@Param() params): Promise<Pass> {
    return this.passesService.find(params.id);
  }

  @Post()
  async create(@Body() createPassDto: CreatePassDto): Promise<string> {
    return this.passesService.insert(createPassDto);
  }

  @Put(':id')
  async update(
    @Param() params,
    @Body() updatePassDto: UpdatePassDto,
  ): Promise<Pass> {
    return this.passesService.update(params.id, updatePassDto);
  }

  @Delete(':id')
  async delete(@Param() params): Promise<any> {
    await this.passesService.remove(params.id);
    return Promise.resolve({ message: 'removed' });
  }
}
