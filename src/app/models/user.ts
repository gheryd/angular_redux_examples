export interface UserI{
    username:string
}

export interface UserAuthI extends UserI{
    password:string;
}

export interface UserTokenI extends UserI{
    expireTime: number;
}