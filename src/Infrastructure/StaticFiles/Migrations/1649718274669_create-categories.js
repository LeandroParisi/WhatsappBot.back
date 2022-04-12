/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
    CREATE TABLE public.categories (
      id serial NOT NULL,
      categoryName varchar(50) NOT NULL,
      CONSTRAINT categories_pkey PRIMARY KEY (id)
    );

    INSERT INTO public.categories (categoryName) VALUES
	 ('Comida'),
	 ('Sucos'),
	 ('Bebidas alcoólicas');
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.categories;
  `)
};
