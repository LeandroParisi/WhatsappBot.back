/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.branches_products (
    id serial NOT NULL,
    branchId uuid NOT NULL,
    productId uuid NOT NULL,
    CONSTRAINT branches_products_pkey PRIMARY KEY (id)
  );
  
  ALTER TABLE public.branches_products 
    ADD CONSTRAINT branches_products_branch_id_fkey 
    FOREIGN KEY (branchId) 
    REFERENCES public.branches(id) ON DELETE CASCADE ON UPDATE CASCADE;
  
  ALTER TABLE public.branches_products 
    ADD CONSTRAINT branches_products_product_id_fkey 
    FOREIGN KEY (productId) 
    REFERENCES public.products(id) ON DELETE CASCADE ON UPDATE CASCADE;
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.branches_products;
  `)
};
