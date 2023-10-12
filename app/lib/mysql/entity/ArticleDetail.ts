import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'article_detail' })
export class AritcleDetailEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: 'varchar', nullable: false })
  title!: string;

  @Column({ type: 'varchar', nullable: false })
  desc!: string;

  @Column({ type: 'varchar', nullable: false })
  content!: string;

  @Column({ type: 'varchar', nullable: false })
  cover!: string;

  @Column({ type: 'varchar', nullable: false })
  author!: string;

  @Column({ type: 'varchar', nullable: false })
  authorAvatar!: string;

  @Column({ type: 'varchar', nullable: false })
  read!: string;

  @Column({ type: 'varchar', nullable: false })
  target!: string;
}