/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.customer_addresses (
    id uuid NOT NULL,
    customerId uuid NOT NULL,
    countryId int4 NOT NULL,
    stateId int4 NOT NULL,
    cityId int4 NOT NULL,
    neighborhood varchar(50) NOT NULL,
    street varchar(50) NOT NULL,
    streetNumber varchar(35) NOT NULL,
    streetComplement varchar(100) NOT NULL,
    postalCode varchar(100) NOT NULL,
    lat numeric(17, 15) NOT NULL,
    lng numeric(19, 15) NOT NULL,
    isActive bool NOT NULL DEFAULT true,
    updatedAt timestamptz NULL DEFAULT now(),
    createdAt timestamptz NULL DEFAULT now(),
    CONSTRAINT customer_addresses_pkey PRIMARY KEY (id)
  );
  
  
  ALTER TABLE public.customer_addresses 
    ADD CONSTRAINT customer_addresses_city_id_fkey 
    FOREIGN KEY (cityId) REFERENCES public.cities(id);
  
  ALTER TABLE public.customer_addresses 
    ADD CONSTRAINT customer_addresses_country_id_fkey 
    FOREIGN KEY (countryId) REFERENCES public.countries(id);
  
  ALTER TABLE public.customer_addresses 
    ADD CONSTRAINT customer_addresses_customer_id_fkey 
    FOREIGN KEY (customerId) REFERENCES public.customers(id) ON DELETE CASCADE ON UPDATE CASCADE;
  
  ALTER TABLE public.customer_addresses 
    ADD CONSTRAINT customer_addresses_state_id_fkey 
    FOREIGN KEY (stateId) REFERENCES public.states(id);
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.customer_addresses;
  `)
};
