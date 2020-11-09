import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pass } from './passes.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class PassesService {
  constructor(
    @InjectRepository(Pass)
    private passRepository: Repository<Pass>,
  ) {}

  all(): Promise<Pass[]> {
    return this.passRepository.find();
  }

  find(uuid: string): Promise<Pass> {
    return this.passRepository.findOne(uuid);
  }

  async remove(uuid: string): Promise<void> {
    await this.passRepository.delete(uuid);
  }

  async update(uuid: string, data: Pass): Promise<UpdateResult> {
    return await this.passRepository.update(uuid, data);
  }
}
