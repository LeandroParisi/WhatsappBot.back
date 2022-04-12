/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.coupons_conditions (
    id serial NOT NULL,
    coupom_id int4 NOT NULL,
    condition_id int4 NOT NULL,
    CONSTRAINT coupons_conditions_pkey PRIMARY KEY (id)
  );
  
  ALTER TABLE public.coupons_conditions 
    ADD CONSTRAINT coupons_conditions_condition_id_fkey 
    FOREIGN KEY (condition_id) REFERENCES public.conditions(id) ON DELETE CASCADE ON UPDATE CASCADE;
  
  ALTER TABLE public.coupons_conditions 
    ADD CONSTRAINT coupons_conditions_coupom_id_fkey 
    FOREIGN KEY (coupom_id) REFERENCES public.coupons(id) ON DELETE CASCADE ON UPDATE CASCADE;
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.coupons_conditions;
  `)
};
