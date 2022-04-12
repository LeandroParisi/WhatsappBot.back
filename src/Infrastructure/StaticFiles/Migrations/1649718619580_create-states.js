/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.states (
    id serial NOT NULL,
    stateName varchar(50) NOT NULL,
    stateCode varchar(2) NOT NULL,
    countryId int4 NOT NULL,
    CONSTRAINT states_pkey PRIMARY KEY (id)
  );
  
  ALTER TABLE public.states 
    ADD CONSTRAINT states_country_id_fkey 
    FOREIGN KEY (countryId) 
    REFERENCES public.countries(id) ON DELETE RESTRICT ON UPDATE CASCADE;
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.states;
  `)
};
