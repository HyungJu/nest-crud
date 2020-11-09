import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  PrimaryColumn,
} from 'typeorm';

export enum BarcodeType {
  PKBarcodeFormatQR = 'PKBarcodeFormatQR',
  PKBarcodeFormatPDF417 = 'PKBarcodeFormatPDF417',
  PKBarcodeFormatAztec = 'PKBarcodeFormatAztec',
  PKBarcodeFormatCode128 = 'PKBarcodeFormatCode128',
}

@Entity()
export class Pass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: number;

  @PrimaryColumn()
  serial_number: string;

  @PrimaryColumn()
  authentication_token: string;

  @Column({
    type: 'enum',
    enum: BarcodeType,
    default: BarcodeType.PKBarcodeFormatCode128,
  })
  primary_barcode_type: BarcodeType;

  @Column({
    type: 'enum',
    enum: BarcodeType,
    default: BarcodeType.PKBarcodeFormatCode128,
  })
  secondary_barcode_type: BarcodeType;
}
