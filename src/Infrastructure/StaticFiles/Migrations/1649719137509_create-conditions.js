/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.conditions (
    id serial NOT NULL,
    "name" varchar(50) NOT NULL,
    CONSTRAINT conditions_pkey PRIMARY KEY (id)
  );

  INSERT INTO public.conditions ("name") VALUES
  ('price_limit'),
  ('date_limit'),
  ('distance_limit_in_km'),
  ('uses_limit');
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.conditions;
  `)
};