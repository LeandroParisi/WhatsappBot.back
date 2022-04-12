/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.products (
    id uuid NOT NULL,
    category_id int4 NOT NULL,
    "name" varchar(50) NOT NULL,
    image varchar(150) NULL,
    "attributes" attributes NOT NULL DEFAULT '"[]"'::jsonb,
    base_price numeric(10, 2) NULL,
    description text NULL,
    ingredients _varchar NOT NULL DEFAULT ARRAY[]::character varying[]::character varying(40)[],
    avaiability _int4 NOT NULL DEFAULT ARRAY[]::integer[],
    is_active bool NOT NULL DEFAULT true,
    updated_at timestamptz NULL DEFAULT now(),
    created_at timestamptz NULL DEFAULT now(),
    CONSTRAINT products_pkey PRIMARY KEY (id)
  );
  
  ALTER TABLE public.products 
    ADD CONSTRAINT products_category_id_fkey 
    FOREIGN KEY (category_id) 
    REFERENCES public.categories(id);
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.products;
  `)
};