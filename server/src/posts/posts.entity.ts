import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity()
export class BlogPost {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 280 })
    title: string;

    @Column('text')
    content: string;

    @CreateDateColumn({ name: 'created_at', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

}