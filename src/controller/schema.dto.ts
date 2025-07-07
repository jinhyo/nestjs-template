
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateAbcInput {
    name: string;
    age: number;
    isActive: boolean;
}

export abstract class IQuery {
    abstract test(): string | Promise<string>;

    abstract abc(): Abc | Promise<Abc>;
}

export class Abc {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
}

type Nullable<T> = T | null;
