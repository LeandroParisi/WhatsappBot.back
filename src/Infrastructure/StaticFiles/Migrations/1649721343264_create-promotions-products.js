/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`

  CREATE TABLE public.promotions_products (
    id serial NOT NULL,
    promotionId int4 NOT NULL,
    productId uuid NOT NULL,
    "attributes" "productAttributes" NOT NULL DEFAULT '"[]"'::jsonb,
    CONSTRAINT promotions_products_pkey PRIMARY KEY (id)
  );
  -- public.promotions_products foreign keys
  
  ALTER TABLE public.promotions_products 
    ADD CONSTRAINT promotions_products_product_id_fkey 
    FOREIGN KEY (productId) 
    REFERENCES public.products(id) ON DELETE CASCADE ON UPDATE CASCADE;

  ALTER TABLE public.promotions_products 
    ADD CONSTRAINT promotions_products_promotion_id_fkey 
    FOREIGN KEY (promotionId) 
    REFERENCES public.promotions(id) ON DELETE CASCADE ON UPDATE CASCADE;

  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.promotions_products;
  `)
};
