/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.menus (
    id uuid NOT NULL,
    menu_name varchar(50) NOT NULL,
    image varchar(150) NULL,
    description text NULL,
    is_active bool NOT NULL DEFAULT true,
    updated_at timestamptz NULL DEFAULT now(),
    created_at timestamptz NULL DEFAULT now(),
    CONSTRAINT menus_pkey PRIMARY KEY (id)
  );
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.menus;
  `)
};