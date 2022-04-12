/* eslint-disable camelcase */

exports.shorthands = undefined;



exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.products (
    id uuid NOT NULL,
    categoryId int4 NOT NULL,
    "name" varchar(50) NOT NULL,
    image varchar(150) NULL,
    "attributes" attributes NOT NULL DEFAULT '"[]"'::jsonb,
    basePrice numeric(10, 2) NULL,
    description text NULL,
    ingredients _varchar NOT NULL DEFAULT ARRAY[]::character varying[]::character varying(40)[],
    avaiability _int4 NOT NULL DEFAULT ARRAY[]::integer[],
    isActive bool NOT NULL DEFAULT true,
    updatedAt timestamptz NULL DEFAULT now(),
    createdAt timestamptz NULL DEFAULT now(),
    CONSTRAINT products_pkey PRIMARY KEY (id)
  );
  
  ALTER TABLE public.products 
    ADD CONSTRAINT products_category_id_fkey 
    FOREIGN KEY (categoryId) 
    REFERENCES public.categories(id);
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.products;
  `)
};