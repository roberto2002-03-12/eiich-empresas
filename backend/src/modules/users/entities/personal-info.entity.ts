import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class PersonalInfo {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id_personal_info',
  })
  idPersonalInfo: number;

  @Column({
    type: 'varchar',
    length: 45,
    nullable: false,
    name: 'land_line',
  })
  landLine: string;

  @Column({
    type: 'varchar',
    length: 25,
    nullable: false,
    name: 'phone_number',
  })
  phoneNumber: string;

  @Column({
    type: 'varchar',
    length: 45,
    nullable: false,
    name: 'line_operator',
  })
  lineOperator: string;

  @Column({
    type: 'varchar',
    length: 105,
    nullable: false,
    name: 'address',
  })
  address: string;

  @Column({
    type: 'varchar',
    length: 105,
    nullable: false,
    name: 'reference',
  })
  reference: string;

  @Column({
    type: 'varchar',
    length: 45,
    nullable: false,
  })
  department: string;

  @Column({
    type: 'varchar',
    length: 45,
    nullable: false,
  })
  province: string;

  @Column({
    type: 'varchar',
    length: 45,
    nullable: false,
  })
  district: string;

  // userId
  @OneToOne(() => User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'user_id',
  })
  user: User;
}
