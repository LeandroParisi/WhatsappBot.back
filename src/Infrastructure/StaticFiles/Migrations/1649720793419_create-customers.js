/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.customers (
    id uuid NOT NULL,
    whatsapp_number varchar(30) NOT NULL,
    whatsapp_id varchar(35) NULL,
    email varchar(80) NOT NULL,
    first_name varchar(35) NOT NULL,
    middle_name varchar(55) NULL,
    last_name varchar(35) NOT NULL,
    cpf varchar(25) NULL,
    is_active bool NOT NULL DEFAULT true,
    updated_at timestamptz NULL DEFAULT now(),
    created_at timestamptz NULL DEFAULT now(),
    CONSTRAINT customers_email_key UNIQUE (email),
    CONSTRAINT customers_pkey PRIMARY KEY (id),
    CONSTRAINT customers_whatsapp_id_key UNIQUE (whatsapp_id),
    CONSTRAINT customers_whatsapp_number_key UNIQUE (whatsapp_number)
  );
  CREATE INDEX customers_cpf ON public.customers USING btree (cpf);
  CREATE INDEX customers_whatsapp_id ON public.customers USING btree (whatsapp_id);
  CREATE INDEX customers_whatsapp_number ON public.customers USING btree (whatsapp_number);
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.customers;
  `)
};