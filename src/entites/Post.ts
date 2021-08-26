import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType, Field } from "type-graphql";
import { User } from './User';

@ObjectType()
@Entity()
export class Post extends BaseEntity{
  @Field()
  @PrimaryGeneratedColumn()  
  id!: number;
  
  @Field()
  @Column()  
  title!: string;

  @Field()
  @Column()  
  text!: string;

  @Field()
  @Column({type: "int", default: 0})
  points!: number;

  @Field()
  @ManyToOne( () => User, user => user.posts)
  creator: User;

  @Field()
  @Column()
  creatorId: number;

  @Field(() => String)
  @CreateDateColumn()  
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}