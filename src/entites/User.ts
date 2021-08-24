import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity{
  @Field()
  @PrimaryGeneratedColumn()  
  id!: number;
  
  @Field(() => String)
  @CreateDateColumn({type: "date"})  
  createdAt = Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt = Date;
  
  @Field()
  @Column({unique: true})  
  username!: string;

  @Field()
  @Column({unique: true})  
  email!: string;


  @Column({type: "text"})  
  password!: string;
}