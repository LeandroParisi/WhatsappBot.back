/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.users (
    id uuid NOT NULL,
    phone_number varchar(50) NOT NULL,
    bussiness_name varchar(50) NOT NULL,
    cnpj varchar(25) NOT NULL,
    email varchar(80) NOT NULL,
    owner_first_name varchar(35) NOT NULL,
    owner_middle_name varchar(55) NULL,
    owner_last_name varchar(35) NOT NULL,
    owner_cpf varchar(25) NOT NULL,
    "password" varchar(120) NOT NULL,
    bot_name varchar(50) NOT NULL DEFAULT 'Walle'::character varying,
    logo varchar(150) NULL,
    role_id int4 NOT NULL,
    is_active bool NOT NULL DEFAULT true,
    updated_at timestamptz NULL DEFAULT now(),
    created_at timestamptz NULL DEFAULT now(),
  
    CONSTRAINT users_cnpj_key UNIQUE (cnpj),
    CONSTRAINT users_email_key UNIQUE (email),
    CONSTRAINT users_owner_cpf_key UNIQUE (owner_cpf),
    CONSTRAINT users_phone_number_key UNIQUE (phone_number),
    CONSTRAINT users_pkey PRIMARY KEY (id)
  );

  ALTER TABLE public.users 
    ADD CONSTRAINT users_role_id_fkey 
    FOREIGN KEY (role_id) 
    REFERENCES public.roles(id) ON DELETE RESTRICT ON UPDATE CASCADE;

  CREATE INDEX users_cnpj ON public.users USING btree (cnpj);

  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.users;
  `)
};