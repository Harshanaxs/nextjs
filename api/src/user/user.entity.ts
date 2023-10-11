import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  vendor_id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  // Other vendor-related fields

  // Optional: Add timestamps for created_at and updated_at
}