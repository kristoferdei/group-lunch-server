import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, CreateDateColumn } from 'typeorm'
import * as bcrypt from 'bcryptjs'

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid') id: string
  @Column({ type: 'varchar', nullable: false, unique: true }) username: string
  @Column({ type: 'varchar', nullable: false }) fullName: string
  @Column({ type: 'varchar', nullable: false }) password: string
  @Column({ type: 'varchar', nullable: false }) email: string
  @CreateDateColumn() createdOn?: Date
  @CreateDateColumn() updatedOn?: Date

  @BeforeInsert()
  async hashPassword(): Promise<any> {
    this.password = await bcrypt.hash(this.password, 10)
  }
}
