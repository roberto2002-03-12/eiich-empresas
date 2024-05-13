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
    name: 'type_document_id',
    nullable: false,
  })
  typeDocumentId: string;

  @Column({
    type: 'varchar',
    length: 45,
    name: 'document_number',
    nullable: false,
  })
  documentNumber: string;

  @Column({
    type: 'varchar',
    length: 65,
    name: 'first_name',
    nullable: false,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 65,
    name: 'first_last_name',
    nullable: false,
  })
  fisrtLastName: string;

  @Column({
    type: 'varchar',
    length: 65,
    name: 'second_last_name',
    nullable: false,
  })
  secondLastName: string;

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
