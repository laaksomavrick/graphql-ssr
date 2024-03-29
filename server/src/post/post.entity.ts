import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from 'typeorm';

import { Tag } from '../tag/tag.entity';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 256 })
    title: string;

    @Column('text')
    content: string;

    @OneToMany(type => Tag, tag => tag.post)
    tags: Tag[];

    @CreateDateColumn({ nullable: false })
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}