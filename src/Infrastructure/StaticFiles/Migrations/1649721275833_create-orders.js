/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.orders (
    id uuid NOT NULL,
    branch_id uuid NOT NULL,
    customer_id uuid NOT NULL,
    address_id uuid NULL,
    order_number serial NOT NULL,
    sub_total numeric(10, 2) NOT NULL,
    delivery_type_id int4 NOT NULL,
    delivery_fee numeric(10, 2) NOT NULL DEFAULT 0,
    payment_method_id int4 NOT NULL,
    discount numeric(10, 2) NOT NULL DEFAULT 0,
    total_price numeric(10, 2) NOT NULL,
    status int4 NOT NULL,
    coupom_id int4 NULL,
    promotion_id int4 NULL,
    estimated_delivery_duration numeric(10, 2) NULL,
    distance_in_km numeric(10, 2) NOT NULL,
    "comments" text NULL,
    dispatch_time timestamptz NULL,
    delivery_time timestamptz NULL,
    updated_at timestamptz NULL DEFAULT now(),
    created_at timestamptz NULL DEFAULT now(),
    CONSTRAINT orders_pkey PRIMARY KEY (id)
  );
  CREATE INDEX orders_branch_id ON public.orders USING btree (branch_id);
  CREATE INDEX orders_order_number ON public.orders USING btree (order_number);
  
  
  -- public.orders foreign keys
  
  ALTER TABLE public.orders 
    ADD CONSTRAINT orders_address_id_fkey 
    FOREIGN KEY (address_id) 
    REFERENCES public.customer_addresses(id);
    
  ALTER TABLE public.orders 
    ADD CONSTRAINT orders_branch_id_fkey 
    FOREIGN KEY (branch_id)  
    REFERENCES public.branches(id);
    
  ALTER TABLE public.orders 
    ADD CONSTRAINT orders_coupom_id_fkey 
    FOREIGN KEY (coupom_id)  
    REFERENCES public.coupons(id);
    
  ALTER TABLE public.orders 
    ADD CONSTRAINT orders_customer_id_fkey 
    FOREIGN KEY (customer_id)  
    REFERENCES public.customers(id);
    
  ALTER TABLE public.orders 
    ADD CONSTRAINT orders_delivery_type_id_fkey 
    FOREIGN KEY (delivery_type_id) 
    REFERENCES public.delivery_types(id);
    
  ALTER TABLE public.orders 
    ADD CONSTRAINT orders_payment_method_id_fkey 
    FOREIGN KEY (payment_method_id)  
    REFERENCES public.payment_methods(id);
    
  ALTER TABLE public.orders 
    ADD CONSTRAINT orders_promotion_id_fkey 
    FOREIGN KEY (promotion_id) 
    REFERENCES public.promotions(id);
    
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.orders;
  `)
};