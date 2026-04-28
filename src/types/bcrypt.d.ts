declare module 'bcrypt' {
  function hash(data: string, saltOrRounds: string | number): Promise<string>;
  function compare(data: string, encrypted: string): Promise<boolean>;
  export { hash, compare };
}
