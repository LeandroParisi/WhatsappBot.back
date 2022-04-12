/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.branches_payment_methods (
    id serial NOT NULL,
    branchId uuid NOT NULL,
    paymentMethodId int4 NOT NULL,
    CONSTRAINT branches_payment_methods_pkey PRIMARY KEY (id)
  );
  
  ALTER TABLE public.branches_payment_methods 
    ADD CONSTRAINT branches_payment_methods_branch_id_fkey 
    FOREIGN KEY (branchId) 
    REFERENCES public.branches(id) ON DELETE CASCADE ON UPDATE CASCADE;
  
  ALTER TABLE public.branches_payment_methods 
    ADD CONSTRAINT branches_payment_methods_payment_method_id_fkey 
    FOREIGN KEY (paymentMethodId) 
    REFERENCES public.payment_methods(id) ON DELETE CASCADE ON UPDATE CASCADE;
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.branches_payment_methods;
  `)
};
