/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.cities (
    id serial NOT NULL,
    cityName varchar(150) NOT NULL,
    stateId int4 NOT NULL,
    CONSTRAINT cities_pkey PRIMARY KEY (id)
  );
  
  ALTER TABLE public.cities
    ADD CONSTRAINT cities_state_id_fkey
    FOREIGN KEY (stateId)
    REFERENCES public.states(id) ON DELETE RESTRICT ON UPDATE CASCADE;
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.cities;
  `)
};
