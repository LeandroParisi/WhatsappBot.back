/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.users (
    id uuid NOT NULL,
    phoneNumber varchar(50) NOT NULL,
    bussinessName varchar(50) NOT NULL,
    cnpj varchar(25) NOT NULL,
    email varchar(80) NOT NULL,
    ownerFirstName varchar(35) NOT NULL,
    ownerMiddleName varchar(55) NULL,
    ownerLastName varchar(35) NOT NULL,
    ownerCpf varchar(25) NOT NULL,
    "password" varchar(120) NOT NULL,
    botName varchar(50) NOT NULL DEFAULT 'Walle'::character varying,
    logo varchar(150) NULL,
    roleId int4 NOT NULL,
    isActive bool NOT NULL DEFAULT true,
    updatedAt timestamptz NULL DEFAULT now(),
    createdAt timestamptz NULL DEFAULT now(),
  
    CONSTRAINT users_cnpj_key UNIQUE (cnpj),
    CONSTRAINT users_email_key UNIQUE (email),
    CONSTRAINT users_owner_cpf_key UNIQUE (ownerCpf),
    CONSTRAINT users_phone_number_key UNIQUE (phoneNumber),
    CONSTRAINT users_pkey PRIMARY KEY (id)
  );

  ALTER TABLE public.users 
    ADD CONSTRAINT users_role_id_fkey 
    FOREIGN KEY (roleId) 
    REFERENCES public.roles(id) ON DELETE RESTRICT ON UPDATE CASCADE;

  CREATE INDEX users_cnpj ON public.users USING btree (cnpj);

  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.users;
  `)
};