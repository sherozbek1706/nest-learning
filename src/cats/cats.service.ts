import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  create(body: Partial<Cat>) {
    console.log(body);

    return body;
  }

  findAll() {
    let cats = [
      {
        name: 'Journy',
        breed: 'Foxy',
        age: 1,
      },
      {
        name: 'Grecc',
        breed: 'Foxy',
        age: 2,
      },
      {
        name: 'Kata',
        breed: 'Doxy',
        age: 0.5,
      },
      {
        name: 'Litos',
        breed: 'Loxy',
        age: 2,
      },
    ];
    return cats;
  }
}
