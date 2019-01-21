export interface UserI {
    username: string;
    isAdmin: boolean;
}

export interface UserAuthI extends UserI {
    password: string;
}

export interface UserTokenI extends UserI {
    expireTime: number;
}
