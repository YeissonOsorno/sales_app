import { Column, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from './client.entity';
import { DetailSale } from './detail_sale.entity'; // Importado

@Entity('sales')
export class Sales {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp' }) 
    date: Date;
    
    @Column({nullable: true})
    discount: number;

    @Column("decimal", { precision: 10, scale: 2 })
    total: number;
    
    @ManyToOne(() => Client, client => client.sales_id) 
    client_id: Client; 

    @OneToMany(() => DetailSale, detailSale => detailSale.sale_id) 
    detailSales: DetailSale[]; 
}