import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, } from 'typeorm'
import { Client } from './client'

export enum TransactionTypes {
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw'
}

@Entity("transactions")
export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({
        type: 'enum',
        enum: TransactionTypes
    })
    type: string

   
}