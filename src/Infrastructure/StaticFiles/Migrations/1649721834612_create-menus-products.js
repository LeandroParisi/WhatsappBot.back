/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.menus_products (
    id serial NOT NULL,
    menuId uuid NOT NULL,
    productId uuid NOT NULL,
    CONSTRAINT menus_products_pkey PRIMARY KEY (id)
  );
  
  
  ALTER TABLE public.menus_products 
    ADD CONSTRAINT menus_products_menu_id_fkey 
    FOREIGN KEY (menuId) 
    REFERENCES public.menus(id) ON DELETE CASCADE ON UPDATE CASCADE;

  ALTER TABLE public.menus_products 
    ADD CONSTRAINT menus_products_product_id_fkey 
    FOREIGN KEY (productId) 
    REFERENCES public.products(id) ON DELETE CASCADE ON UPDATE CASCADE;
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.menus_products;
  `)
};
