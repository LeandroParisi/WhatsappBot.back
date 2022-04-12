/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.branches_promotions (
    id serial NOT NULL,
    branchId uuid NOT NULL,
    promotionId int4 NOT NULL,
    CONSTRAINT branches_promotions_pkey PRIMARY KEY (id)
  );
  
  
  ALTER TABLE public.branches_promotions 
    ADD CONSTRAINT branches_promotions_branch_id_fkey 
    FOREIGN KEY (branchId) 
    REFERENCES public.branches(id) ON DELETE CASCADE ON UPDATE CASCADE;
  
  ALTER TABLE public.branches_promotions 
    ADD CONSTRAINT branches_promotions_promotion_id_fkey 
    FOREIGN KEY (promotionId) 
    REFERENCES public.promotions(id) ON DELETE CASCADE ON UPDATE CASCADE;
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.branches_promotions;
  `)
};
