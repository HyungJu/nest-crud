import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum BarcodeType {
  A_TYPE = 'A_TYPE',
  B_TYPE = 'B_TYPE',
}

@Entity()
export class Pass {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  code: number;

  @Column({
    type: 'enum',
    enum: BarcodeType,
    default: BarcodeType.A_TYPE,
  })
  type: BarcodeType;
}
