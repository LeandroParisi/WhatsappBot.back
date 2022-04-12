/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.payment_methods (
    id serial NOT NULL,
    payment_method varchar(40) NOT NULL,
    CONSTRAINT payment_methods_pkey PRIMARY KEY (id)
  );

  INSERT INTO public.payment_methods (payment_method) VALUES
	 ('money'),
	 ('pix'),
	 ('credit'),
	 ('debit'),
	 ('alelo_meal'),
	 ('alelo_food'),
	 ('sodexo_meal'),
	 ('sodexo_food');
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.payment_methods;
  `)
};