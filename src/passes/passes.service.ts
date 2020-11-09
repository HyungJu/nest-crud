import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BarcodeType, Pass } from './passes.entity';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreatePassDto } from './dto/create-pass.dto';
import { UpdatePassDto, UpdatePassResponseDto } from './dto/update-pass.dto';

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

  async update(
    uuid: string,
    pass: UpdatePassDto,
  ): Promise<UpdatePassResponseDto> {
    const passToUpdate = await this.find(uuid);
    passToUpdate.code = pass.code;
    passToUpdate.name = pass.name;
    passToUpdate.type = BarcodeType[pass.type];

    await this.passRepository.update(uuid, passToUpdate);

    return {
      code: pass.code,
      name: pass.name,
      type: pass.type,
      id: uuid,
    };
  }

  async insert(pass: CreatePassDto): Promise<UpdatePassResponseDto> {
    const passCreated = new Pass();
    passCreated.code = pass.code;
    passCreated.name = pass.name;
    passCreated.type = BarcodeType[pass.type];

    const ret = await this.passRepository.insert(passCreated);
    return {
      code: pass.code,
      name: pass.name,
      type: pass.type,
      id: ret.identifiers[0].id,
    };
  }
}
