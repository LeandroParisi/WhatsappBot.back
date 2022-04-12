/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.promotions (
    id serial NOT NULL,
    "name" varchar(50) NOT NULL,
    total_price numeric(10, 2) NOT NULL,
    due_date timestamptz NULL,
    avaiability _int4 NULL,
    is_active bool NOT NULL DEFAULT true,
    image varchar(150) NULL,
    updated_at timestamptz NULL DEFAULT now(),
    created_at timestamptz NULL DEFAULT now(),
    CONSTRAINT promotions_pkey PRIMARY KEY (id)
  );
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.mpromotionsenus;
  `)
};