import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pass } from './passes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PassesService {
  constructor(
    @InjectRepository(Pass)
    private passRepository: Repository<Pass>,
  ) {}

  all(): Promise<Pass[]> {
    return this.passRepository.find();
  }
}
