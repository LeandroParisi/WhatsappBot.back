/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.customers (
    id uuid NOT NULL,
    whatsappNumber varchar(30) NOT NULL,
    whatsappId varchar(35) NULL,
    email varchar(80) NOT NULL,
    firstName varchar(35) NOT NULL,
    middleName varchar(55) NULL,
    lastName varchar(35) NOT NULL,
    cpf varchar(25) NULL,
    isActive bool NOT NULL DEFAULT true,
    updatedAt timestamptz NULL DEFAULT now(),
    createdAt timestamptz NULL DEFAULT now(),
    CONSTRAINT customers_email_key UNIQUE (email),
    CONSTRAINT customers_pkey PRIMARY KEY (id),
    CONSTRAINT customers_whatsapp_id_key UNIQUE (whatsappId),
    CONSTRAINT customers_whatsapp_number_key UNIQUE (whatsappNumber)
  );
  CREATE INDEX customers_cpf ON public.customers USING btree (cpf);
  CREATE INDEX customers_whatsapp_id ON public.customers USING btree (whatsappId);
  CREATE INDEX customers_whatsapp_number ON public.customers USING btree (whatsappNumber);
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.customers;
  `)
};