/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.customer_addresses (
    id uuid NOT NULL,
    customer_id uuid NOT NULL,
    country_id int4 NOT NULL,
    state_id int4 NOT NULL,
    city_id int4 NOT NULL,
    neighborhood varchar(50) NOT NULL,
    street varchar(50) NOT NULL,
    street_number varchar(35) NOT NULL,
    street_complement varchar(100) NOT NULL,
    postal_code varchar(100) NOT NULL,
    lat numeric(17, 15) NOT NULL,
    lng numeric(19, 15) NOT NULL,
    is_active bool NOT NULL DEFAULT true,
    updated_at timestamptz NULL DEFAULT now(),
    created_at timestamptz NULL DEFAULT now(),
    CONSTRAINT customer_addresses_pkey PRIMARY KEY (id)
  );
  
  
  ALTER TABLE public.customer_addresses 
    ADD CONSTRAINT customer_addresses_city_id_fkey 
    FOREIGN KEY (city_id) REFERENCES public.cities(id);
  
  ALTER TABLE public.customer_addresses 
    ADD CONSTRAINT customer_addresses_country_id_fkey 
    FOREIGN KEY (country_id) REFERENCES public.countries(id);
  
  ALTER TABLE public.customer_addresses 
    ADD CONSTRAINT customer_addresses_customer_id_fkey 
    FOREIGN KEY (customer_id) REFERENCES public.customers(id) ON DELETE CASCADE ON UPDATE CASCADE;
  
  ALTER TABLE public.customer_addresses 
    ADD CONSTRAINT customer_addresses_state_id_fkey 
    FOREIGN KEY (state_id) REFERENCES public.states(id);
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.customer_addresses;
  `)
};
