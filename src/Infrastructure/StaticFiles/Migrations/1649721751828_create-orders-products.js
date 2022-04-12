/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.orders_products (
    id serial NOT NULL,
    orderId uuid NOT NULL,
    productId uuid NOT NULL,
    quantity int4 NOT NULL DEFAULT 1,
    totalPrice numeric(10, 2) NOT NULL,
    "attributes" "productAttributes" NULL,
    CONSTRAINT orders_products_pkey PRIMARY KEY (id)
  );
  
  ALTER TABLE public.orders_products 
    ADD CONSTRAINT orders_products_order_id_fkey 
    FOREIGN KEY (orderId) 
    REFERENCES public.orders(id) ON DELETE CASCADE ON UPDATE CASCADE;

  ALTER TABLE public.orders_products 
    ADD CONSTRAINT orders_products_product_id_fkey 
    FOREIGN KEY (productId) 
    REFERENCES public.products(id) ON DELETE CASCADE ON UPDATE CASCADE;
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.orders_products;
  `)
};
