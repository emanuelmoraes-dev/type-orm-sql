import { Column, OneToMany, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PeopleHouseRent } from './PeopleHouseRent';

@Entity()
export class People {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @OneToMany(type => PeopleHouseRent, house => house.people)
    houses: PeopleHouseRent[];

}