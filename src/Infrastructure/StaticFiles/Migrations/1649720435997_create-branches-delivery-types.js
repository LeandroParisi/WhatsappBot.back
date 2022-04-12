/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.branches_delivery_types (
    id serial NOT NULL,
    branchId uuid NOT NULL,
    deliveryTypeId int4 NOT NULL,
    CONSTRAINT branches_delivery_types_pkey PRIMARY KEY (id)
  );
  
  ALTER TABLE public.branches_delivery_types 
    ADD CONSTRAINT branches_delivery_types_branch_id_fkey 
    FOREIGN KEY (branchId) 
    REFERENCES public.branches(id) ON DELETE CASCADE ON UPDATE CASCADE;

  ALTER TABLE public.branches_delivery_types 
    ADD CONSTRAINT branches_delivery_types_delivery_type_id_fkey 
    FOREIGN KEY (deliveryTypeId) 
    REFERENCES public.delivery_types(id) ON DELETE RESTRICT ON UPDATE CASCADE;
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.branches_delivery_types;
  `)
};
