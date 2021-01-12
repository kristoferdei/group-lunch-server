import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  phone: string

  @Column()
  distance: number

  @Column()
  image: string

  @Column()
  vote: boolean
}
