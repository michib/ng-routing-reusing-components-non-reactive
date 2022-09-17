import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

export interface User {
  id: string;
  name: string;
  location: string;
  bio: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly users: User[] = [
    {
      id: '1',
      name: 'Max',
      location: 'Hamburg',
      bio: 'Loving the northern sea',
    },
    {
      id: '2',
      name: 'Heidi',
      location: 'Garmisch',
      bio: 'The mountains are my home',
    },
    {
      id: '3',
      name: 'Elias',
      location: 'Berlin',
      bio: "I live in Berlin, so i'm hip",
    },
  ];

  // Simulate loading from API
  getUsers() {
    return of(this.users).pipe(delay(500));
  }

  getUser(id: string | null) {
    return of(this.users.find((user) => user.id === id)).pipe(delay(500));
  }
}
