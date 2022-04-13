/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`

  CREATE TABLE public.branches (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    whatsapp_number varchar(30) NOT NULL,
    whatsapp_id varchar(35) NULL,
    manager_name varchar(25) NOT NULL,
    branch_name varchar(45) NOT NULL,
    country_id int4 NOT NULL,
    state_id int4 NOT NULL,
    city_id int4 NOT NULL,
    neighborhood varchar(35) NOT NULL,
    street varchar(35) NOT NULL,
    street_number varchar(15) NOT NULL,
    street_complement varchar(150) NOT NULL,
    postal_code varchar(25) NOT NULL,
    lat numeric(17, 15) NOT NULL,
    lng numeric(19, 15) NOT NULL,
    delivery_fees "deliveryFeesJsonb" NOT NULL,
    logo varchar(150) NULL,
    is_active bool NOT NULL DEFAULT true,
    updated_at timestamptz NULL DEFAULT now(),
    created_at timestamptz NULL DEFAULT now(),

    CONSTRAINT branches_pkey PRIMARY KEY (id),
    CONSTRAINT branches_whatsapp_id_key UNIQUE (whatsapp_id),
    CONSTRAINT branches_whatsapp_number_key UNIQUE (whatsapp_number)
  );

  CREATE INDEX branches_user_id ON public.branches USING btree (user_id);
  CREATE INDEX branches_whatsapp_id ON public.branches USING btree (whatsapp_id);
  CREATE INDEX branches_whatsapp_number ON public.branches USING btree (whatsapp_number);
  
  ALTER TABLE public.branches ALTER COLUMN delivery_fees TYPE "deliveryFeesJsonb";
  
  ALTER TABLE public.branches 
    ADD CONSTRAINT branches_city_id_fkey 
    FOREIGN KEY (city_id) 
    REFERENCES public.cities(id) ON DELETE RESTRICT ON UPDATE CASCADE;

  ALTER TABLE public.branches 
    ADD CONSTRAINT branches_country_id_fkey 
    FOREIGN KEY (country_id) 
    REFERENCES public.countries(id) ON DELETE RESTRICT ON UPDATE CASCADE;

  ALTER TABLE public.branches 
    ADD CONSTRAINT branches_state_id_fkey 
    FOREIGN KEY (state_id) 
    REFERENCES public.states(id) ON DELETE RESTRICT ON UPDATE CASCADE;

  ALTER TABLE public.branches 
    ADD CONSTRAINT branches_user_id_fkey 
    FOREIGN KEY (user_id) 
    REFERENCES public.users(id) ON DELETE RESTRICT ON UPDATE CASCADE;
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.users;
  `)
};