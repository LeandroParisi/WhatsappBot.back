/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.states (
    id serial NOT NULL,
    state_name varchar(50) NOT NULL,
    state_code varchar(2) NOT NULL,
    country_id int4 NOT NULL,
    CONSTRAINT states_pkey PRIMARY KEY (id)
  );
  
  ALTER TABLE public.states 
    ADD CONSTRAINT states_country_id_fkey 
    FOREIGN KEY (country_id) 
    REFERENCES public.countries(id) ON DELETE RESTRICT ON UPDATE CASCADE;
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.states;
  `)
};
