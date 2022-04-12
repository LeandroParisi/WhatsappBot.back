/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.menus_products (
    id serial NOT NULL,
    menu_id uuid NOT NULL,
    product_id uuid NOT NULL,
    CONSTRAINT menus_products_pkey PRIMARY KEY (id)
  );
  
  
  ALTER TABLE public.menus_products 
    ADD CONSTRAINT menus_products_menu_id_fkey 
    FOREIGN KEY (menu_id) 
    REFERENCES public.menus(id) ON DELETE CASCADE ON UPDATE CASCADE;

  ALTER TABLE public.menus_products 
    ADD CONSTRAINT menus_products_product_id_fkey 
    FOREIGN KEY (product_id) 
    REFERENCES public.products(id) ON DELETE CASCADE ON UPDATE CASCADE;
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.menus_products;
  `)
};
