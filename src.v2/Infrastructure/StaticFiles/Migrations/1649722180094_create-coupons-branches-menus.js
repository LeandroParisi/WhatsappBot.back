/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.branches_menus (
    id serial NOT NULL,
    branch_id uuid NOT NULL,
    menu_id uuid NOT NULL,
    CONSTRAINT branches_menus_pkey PRIMARY KEY (id)
  );
  
  ALTER TABLE public.branches_menus 
    ADD CONSTRAINT branches_menus_branch_id_fkey 
    FOREIGN KEY (branch_id) 
    REFERENCES public.branches(id) ON DELETE CASCADE ON UPDATE CASCADE;
  
  ALTER TABLE public.branches_menus 
    ADD CONSTRAINT branches_menus_menu_id_fkey 
    FOREIGN KEY (menu_id) 
    REFERENCES public.menus(id) ON DELETE CASCADE ON UPDATE CASCADE;
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.branches_menus;
  `)
};
