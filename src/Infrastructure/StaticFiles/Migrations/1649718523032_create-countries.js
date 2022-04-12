/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
    CREATE TABLE public.countries (
      id serial NOT NULL,
      country_name varchar(45) NOT NULL,
      CONSTRAINT countries_pkey PRIMARY KEY (id)
    );

    INSERT INTO public.countries (country_name) VALUES ('Brazil');
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.countries;
  `)
};
