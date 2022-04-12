/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.branches_promotions (
    id serial NOT NULL,
    branch_id uuid NOT NULL,
    promotion_id int4 NOT NULL,
    CONSTRAINT branches_promotions_pkey PRIMARY KEY (id)
  );
  
  
  ALTER TABLE public.branches_promotions 
    ADD CONSTRAINT branches_promotions_branch_id_fkey 
    FOREIGN KEY (branch_id) 
    REFERENCES public.branches(id) ON DELETE CASCADE ON UPDATE CASCADE;
  
  ALTER TABLE public.branches_promotions 
    ADD CONSTRAINT branches_promotions_promotion_id_fkey 
    FOREIGN KEY (promotion_id) 
    REFERENCES public.promotions(id) ON DELETE CASCADE ON UPDATE CASCADE;
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.branches_promotions;
  `)
};
