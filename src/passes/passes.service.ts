import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {BarcodeType, Pass} from './passes.entity';
import {InsertResult, Repository, UpdateResult} from 'typeorm';
import {CreatePassDto} from "./dto/create-pass.dto";
import {UpdatePassDto} from "./dto/update-pass.dto";

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

  async update(uuid: string, pass: UpdatePassDto): Promise<UpdatePassDto> {
    const passToUpdate = await this.find(uuid);
    passToUpdate.code = pass.code;
    passToUpdate.name = pass.name;
    passToUpdate.type = BarcodeType[pass.type];

    const ret = await this.passRepository.update(uuid, passToUpdate);
    return pass;
  }

  async insert(pass: CreatePassDto): Promise<CreatePassDto> {
    const passCreated = new Pass();
    passCreated.code = pass.code;
    passCreated.name = pass.name;
    passCreated.type = BarcodeType[pass.type];

    const ret = await this.passRepository.insert(passCreated);
    return pass;
  }
}
