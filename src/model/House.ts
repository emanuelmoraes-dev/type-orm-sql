import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PeopleHouseRent } from './PeopleHouseRent';

@Entity()
export class House {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    address_street: string;

    @Column()
    address_number: number;

    @Column()
    address_city: string;

    @Column({ default: 'Brazil' })
    address_contry: string;

    @OneToMany(type => PeopleHouseRent, people => people.house)
    peoples: PeopleHouseRent[];

}