import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'article_summary' })
export class AritcleSummaryEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: 'varchar', nullable: false })
  title!: string;

  @Column({ type: 'varchar', nullable: false })
  desc!: string;

  @Column({ type: 'varchar', nullable: false })
  cover!: string;

  @Column({ type: 'varchar', nullable: false })
  authorAvatar!: string;

  @Column({ type: 'varchar', nullable: false })
  read!: string;

  @Column({ type: 'varchar', nullable: false })
  target!: string;
}