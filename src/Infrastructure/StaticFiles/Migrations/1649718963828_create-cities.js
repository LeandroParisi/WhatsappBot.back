/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.cities (
    id serial NOT NULL,
    city_name varchar(150) NOT NULL,
    state_id int4 NOT NULL,
    CONSTRAINT cities_pkey PRIMARY KEY (id)
  );
  
  ALTER TABLE public.cities
    ADD CONSTRAINT cities_state_id_fkey
    FOREIGN KEY (state_id)
    REFERENCES public.states(id) ON DELETE RESTRICT ON UPDATE CASCADE;
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.cities;
  `)
};
