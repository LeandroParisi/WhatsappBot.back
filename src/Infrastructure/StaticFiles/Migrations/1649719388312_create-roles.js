/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
    CREATE TABLE public.roles (
      id serial NOT NULL,
      name varchar(50) NOT NULL,
      CONSTRAINT roles_pkey PRIMARY KEY (id)
    );

    INSERT INTO public.roles (name) VALUES
    ('admin'),
    ('user')
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.roles;
  `)
};
