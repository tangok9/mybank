export class User{
    constructor(
        public _id: string,
        public nombre: string,
        public apellido: string,
        public correo: string,
        public password: string,
        public role:string,
        public imagen:string
    ){}
}