import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity()
export class Voting {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  restaurant: string

  @Column()
  user: string

  @CreateDateColumn() createdOn?: Date
}
