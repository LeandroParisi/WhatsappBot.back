/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`

  CREATE TABLE public.promotions_products (
    id serial NOT NULL,
    promotion_id int4 NOT NULL,
    product_id uuid NOT NULL,
    "attributes" "productAttributes" NOT NULL DEFAULT '"[]"'::jsonb,
    CONSTRAINT promotions_products_pkey PRIMARY KEY (id)
  );
  -- public.promotions_products foreign keys
  
  ALTER TABLE public.promotions_products 
    ADD CONSTRAINT promotions_products_product_id_fkey 
    FOREIGN KEY (product_id) 
    REFERENCES public.products(id) ON DELETE CASCADE ON UPDATE CASCADE;

  ALTER TABLE public.promotions_products 
    ADD CONSTRAINT promotions_products_promotion_id_fkey 
    FOREIGN KEY (promotion_id) 
    REFERENCES public.promotions(id) ON DELETE CASCADE ON UPDATE CASCADE;

  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.promotions_products;
  `)
};
