/*
** Please edit this file as needed **
It's been generated by Zapatos as a custom type definition placeholder, and won't be overwritten
*/


declare module 'zapatos/custom' {
  import type * as db from 'zapatos/db';

  interface ProductAttributes {
    name : string
    type : DeliveryFeeTypes
    price : number
    quantity : number
  }

  export type PgProductAttributes = db.JSONValue;  // replace with your custom type or interface as desired
}