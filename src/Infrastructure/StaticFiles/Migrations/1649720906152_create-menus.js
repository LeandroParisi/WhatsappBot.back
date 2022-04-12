/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.menus (
    id uuid NOT NULL,
    menuName varchar(50) NOT NULL,
    image varchar(150) NULL,
    description text NULL,
    isActive bool NOT NULL DEFAULT true,
    updatedAt timestamptz NULL DEFAULT now(),
    createdAt timestamptz NULL DEFAULT now(),
    CONSTRAINT menus_pkey PRIMARY KEY (id)
  );
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.menus;
  `)
};