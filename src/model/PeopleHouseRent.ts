import { Column, ManyToOne, OneToOne, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { People } from './People';
import { Rent } from './Rent';
import { House } from './House';

@Entity()
export class PeopleHouseRent {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => People, people => people.houses)
    people: People;

    @OneToOne(type => Rent, rent => rent.peopleHouse)
    rent: Rent;

    @ManyToOne(type => House, house => house.peoples)
    house: House;

    @Column()
    date: Date;

}