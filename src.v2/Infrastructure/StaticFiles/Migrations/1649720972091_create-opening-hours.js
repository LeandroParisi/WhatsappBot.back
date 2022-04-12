/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.opening_hours (
    id serial NOT NULL,
    branch_id uuid NOT NULL,
    monday "openingHours" NULL,
    tuesday "openingHours" NULL,
    wednesday "openingHours" NULL,
    thursday "openingHours" NULL,
    friday "openingHours" NULL,
    saturday "openingHours" NULL,
    sunday "openingHours" NULL,
    updated_at timestamptz NULL DEFAULT now(),
    created_at timestamptz NULL DEFAULT now(),
    CONSTRAINT opening_hours_pkey PRIMARY KEY (id)
  );
  
  ALTER TABLE public.opening_hours 
    ADD CONSTRAINT opening_hours_branch_id_fkey 
    FOREIGN KEY (branch_id) 
    REFERENCES public.branches(id) ON DELETE CASCADE ON UPDATE CASCADE;
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.opening_hours;
  `)
};