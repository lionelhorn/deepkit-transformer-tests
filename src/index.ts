// import {deserialize, MinLength, serialize} from '@deepkit/type';
//
// interface Config {
//   color: string;
// }
//
// class User {
//   id?: number;
//   createdAt?: Date;
//   firstName?: string;
//   lastName?: string;
//   config?: Config;
//   username?: string;
//   text: string & MinLength<100>
//   constructor(text: string) {
//     this.text = text;
//   }
// }
//
// //deserialize JSON object to real instances
// const user = deserialize<User>({
//   id: 0,
//   username: 'peter',
//   createdAt: '2021-06-26T12:34:41.061Z',
//   config: {color: '#221122'},
//   text: "hello"
// });
// console.log(user.createdAt instanceof Date);
//
// const serialized = serialize<User>(new User("test"));
// console.log(serialized);

import {MinLength, validate} from "@deepkit/type";

interface User {
  id: number;
  username: string & MinLength<100>
}

console.log(validate<User>({id: 1, username: 'Joe'}));
