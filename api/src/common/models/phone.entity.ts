import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Client } from './client.entity';
@Entity('phones')
export class Phone {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: string;

    @Column({ name: 'client_id', nullable: false })
    client_id: number;

    @ManyToOne(() => Client, (client) => client.phone,{
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'client_id' })
    client: Client;
}
