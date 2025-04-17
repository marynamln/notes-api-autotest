import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Note {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column({ default: '' })
    content: string;
}
