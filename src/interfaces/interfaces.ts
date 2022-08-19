export interface IUser {
  _id: string;
  name: string;
  password: string;
  email: string;
  code: number;
  createdAt: string;
  courses: ICouse[];
  avatar: string | null;
  phoneNumber: number;
}

export interface ICreateUser {
  name: string;
  password: string;
  email: string;
  code: number;
  avatar: any[];
  phoneNumber: number;
}

export interface ICouse {
  _id: string;
  name: string;
  classTime: string[];
  description: string;
  price: number;
  createdAt: string;
}
