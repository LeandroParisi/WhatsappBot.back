/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
    CREATE TABLE public.countries (
      id serial NOT NULL,
      countryName varchar(45) NOT NULL,
      CONSTRAINT countries_pkey PRIMARY KEY (id)
    );

    INSERT INTO public.countries (countryName) VALUES ('Brazil');
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.countries;
  `)
};
