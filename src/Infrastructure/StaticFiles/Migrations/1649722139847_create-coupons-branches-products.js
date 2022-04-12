/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.branches_products (
    id serial NOT NULL,
    branch_id uuid NOT NULL,
    product_id uuid NOT NULL,
    CONSTRAINT branches_products_pkey PRIMARY KEY (id)
  );
  
  ALTER TABLE public.branches_products 
    ADD CONSTRAINT branches_products_branch_id_fkey 
    FOREIGN KEY (branch_id) 
    REFERENCES public.branches(id) ON DELETE CASCADE ON UPDATE CASCADE;
  
  ALTER TABLE public.branches_products 
    ADD CONSTRAINT branches_products_product_id_fkey 
    FOREIGN KEY (product_id) 
    REFERENCES public.products(id) ON DELETE CASCADE ON UPDATE CASCADE;
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.branches_products;
  `)
};
