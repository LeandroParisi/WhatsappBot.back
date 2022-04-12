/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.orders (
    id uuid NOT NULL,
    branchId uuid NOT NULL,
    customerId uuid NOT NULL,
    addressId uuid NULL,
    orderNumber serial NOT NULL,
    subTotal numeric(10, 2) NOT NULL,
    deliveryTypeId int4 NOT NULL,
    deliveryFee numeric(10, 2) NOT NULL DEFAULT 0,
    paymentMethodId int4 NOT NULL,
    discount numeric(10, 2) NOT NULL DEFAULT 0,
    totalPrice numeric(10, 2) NOT NULL,
    status int4 NOT NULL,
    coupomId int4 NULL,
    promotionId int4 NULL,
    estimatedDeliveryDuration numeric(10, 2) NULL,
    distanceInKm numeric(10, 2) NOT NULL,
    "comments" text NULL,
    dispatchTime timestamptz NULL,
    deliveryTime timestamptz NULL,
    updatedAt timestamptz NULL DEFAULT now(),
    createdAt timestamptz NULL DEFAULT now(),
    CONSTRAINT orders_pkey PRIMARY KEY (id)
  );
  CREATE INDEX orders_branch_id ON public.orders USING btree (branchId);
  CREATE INDEX orders_order_number ON public.orders USING btree (orderNumber);
  
  
  -- public.orders foreign keys
  
  ALTER TABLE public.orders 
    ADD CONSTRAINT orders_address_id_fkey 
    FOREIGN KEY (addressId) 
    REFERENCES public.customer_addresses(id);
    
  ALTER TABLE public.orders 
    ADD CONSTRAINT orders_branch_id_fkey 
    FOREIGN KEY (branchId)  
    REFERENCES public.branches(id);
    
  ALTER TABLE public.orders 
    ADD CONSTRAINT orders_coupom_id_fkey 
    FOREIGN KEY (coupomId)  
    REFERENCES public.coupons(id);
    
  ALTER TABLE public.orders 
    ADD CONSTRAINT orders_customer_id_fkey 
    FOREIGN KEY (customerId)  
    REFERENCES public.customers(id);
    
  ALTER TABLE public.orders 
    ADD CONSTRAINT orders_delivery_type_id_fkey 
    FOREIGN KEY (deliveryTypeId) 
    REFERENCES public.delivery_types(id);
    
  ALTER TABLE public.orders 
    ADD CONSTRAINT orders_payment_method_id_fkey 
    FOREIGN KEY (paymentMethodId)  
    REFERENCES public.payment_methods(id);
    
  ALTER TABLE public.orders 
    ADD CONSTRAINT orders_promotion_id_fkey 
    FOREIGN KEY (promotionId) 
    REFERENCES public.promotions(id);
    
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.orders;
  `)
};