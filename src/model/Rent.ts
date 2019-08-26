import { Column, OneToOne, JoinColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PeopleHouseRent } from './PeopleHouseRent';

@Entity()
export class Rent {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: number;

    @Column()
    endOfContract: Date;

    @OneToOne(type => PeopleHouseRent)
    @JoinColumn()
    peopleHouse: PeopleHouseRent;

}