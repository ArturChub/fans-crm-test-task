import {
  Column,
  Model,
  Table,
  CreatedAt,
  PrimaryKey,
  UpdatedAt,
  DataType,
} from 'sequelize-typescript';
import { v4 as uuidV4 } from 'uuid';
import { IsUUID } from 'class-validator';

@Table({})
export class User extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string = uuidV4();

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  phone: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
