import {MinLength, validate} from "@deepkit/type";

interface User {
  id: number;
  username: string & MinLength<100>
}

console.log(validate<User>({id: 1, username: 'Joe'}));
