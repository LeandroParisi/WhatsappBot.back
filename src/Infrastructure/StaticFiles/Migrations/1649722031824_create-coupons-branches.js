/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.coupons_branches (
    id serial NOT NULL,
    coupom_id int4 NOT NULL,
    branch_id uuid NOT NULL,
    CONSTRAINT coupons_branches_pkey PRIMARY KEY (id)
  );
  
  ALTER TABLE public.coupons_branches 
    ADD CONSTRAINT coupons_branches_branch_id_fkey 
    FOREIGN KEY (branch_id) REFERENCES public.branches(id) ON DELETE CASCADE ON UPDATE CASCADE;
  
  ALTER TABLE public.coupons_branches 
    ADD CONSTRAINT coupons_branches_coupom_id_fkey 
    FOREIGN KEY (coupom_id) REFERENCES public.coupons(id) ON DELETE CASCADE ON UPDATE CASCADE;
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.coupons_branches;
  `)
};
