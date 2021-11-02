import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    unity: string;

    @Column({ type: 'numeric', precision: 10, scale: 3 })
    standart: number;

    @Column({ default: false })
    enabled: boolean;
}