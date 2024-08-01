
declare module "Bun"{
    interface Env{
        GATWAY_PORT: number,
        USER_API_PORT: number,
        HOST: string,
        NODE_ENV: string,
    }
}