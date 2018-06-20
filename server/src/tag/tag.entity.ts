import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from 'typeorm';

import { Post } from '../post/post.entity';

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 64 })
    tag: string;

    @ManyToOne(type => Post, post => post.tags)
    post: Post;

    @CreateDateColumn({ nullable: false })
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}