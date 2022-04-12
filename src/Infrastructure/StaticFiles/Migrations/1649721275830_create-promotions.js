/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.promotions (
    id serial NOT NULL,
    "name" varchar(50) NOT NULL,
    totalPrice numeric(10, 2) NOT NULL,
    dueDate timestamptz NULL,
    avaiability _int4 NULL,
    isActive bool NOT NULL DEFAULT true,
    image varchar(150) NULL,
    updatedAt timestamptz NULL DEFAULT now(),
    createdAt timestamptz NULL DEFAULT now(),
    CONSTRAINT promotions_pkey PRIMARY KEY (id)
  );
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.mpromotionsenus;
  `)
};