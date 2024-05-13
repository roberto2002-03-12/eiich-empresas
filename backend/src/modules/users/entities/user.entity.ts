import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id_user',
  })
  idUser: number;

  @Column({
    type: 'varchar',
    length: 105,
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    select: false, // no mostrar contraseña por defecto
  })
  password: string;

  @Column({
    name: 'created_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    name: 'created_by',
    type: 'bigint',
    nullable: false,
  })
  createdBy: number;

  @Column({
    name: 'updated_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({
    name: 'updated_by',
    type: 'bigint',
    nullable: false,
  })
  updatedBy: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    select: false, // no mostrar recovery token por defecto
    name: 'recovery_token',
  })
  recoveryToken: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    select: false, // no mostrar recovery token por defecto
    name: 'reference_code',
  })
  referenceCode: string;
}
