/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`

  CREATE TABLE public.branches (
    id uuid NOT NULL,
    userId uuid NOT NULL,
    whatsappNumber varchar(30) NOT NULL,
    whatsappId varchar(35) NULL,
    managerName varchar(25) NOT NULL,
    branchName varchar(45) NOT NULL,
    countryId int4 NOT NULL,
    stateId int4 NOT NULL,
    cityId int4 NOT NULL,
    neighborhood varchar(35) NOT NULL,
    street varchar(35) NOT NULL,
    streetNumber varchar(15) NOT NULL,
    streetComplement varchar(150) NOT NULL,
    postalCode varchar(25) NOT NULL,
    lat numeric(17, 15) NOT NULL,
    lng numeric(19, 15) NOT NULL,
    deliveryFees "deliveryFeesJsonb" NOT NULL,
    logo varchar(150) NULL,
    isActive bool NOT NULL DEFAULT true,
    updatedAt timestamptz NULL DEFAULT now(),
    createdAt timestamptz NULL DEFAULT now(),

    CONSTRAINT branches_pkey PRIMARY KEY (id),
    CONSTRAINT branches_whatsapp_id_key UNIQUE (whatsappId),
    CONSTRAINT branches_whatsapp_number_key UNIQUE (whatsappNumber)
  );

  CREATE INDEX branches_user_id ON public.branches USING btree (userId);
  CREATE INDEX branches_whatsapp_id ON public.branches USING btree (whatsappId);
  CREATE INDEX branches_whatsapp_number ON public.branches USING btree (whatsappNumber);
  
  ALTER TABLE public.branches ALTER COLUMN deliveryFees TYPE "deliveryFeesJsonb";
  
  ALTER TABLE public.branches 
    ADD CONSTRAINT branches_city_id_fkey 
    FOREIGN KEY (cityId) 
    REFERENCES public.cities(id) ON DELETE RESTRICT ON UPDATE CASCADE;

  ALTER TABLE public.branches 
    ADD CONSTRAINT branches_country_id_fkey 
    FOREIGN KEY (countryId) 
    REFERENCES public.countries(id) ON DELETE RESTRICT ON UPDATE CASCADE;

  ALTER TABLE public.branches 
    ADD CONSTRAINT branches_state_id_fkey 
    FOREIGN KEY (stateId) 
    REFERENCES public.states(id) ON DELETE RESTRICT ON UPDATE CASCADE;

  ALTER TABLE public.branches 
    ADD CONSTRAINT branches_user_id_fkey 
    FOREIGN KEY (userId) 
    REFERENCES public.users(id) ON DELETE RESTRICT ON UPDATE CASCADE;
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.users;
  `)
};