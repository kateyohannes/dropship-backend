
declare module "Bun"{
    interface Env{
        PORT: number,
        HOST: string,
        NODE_ENV: string,
    }
}