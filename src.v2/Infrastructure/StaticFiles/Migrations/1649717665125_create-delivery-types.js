/* eslint-disable camelcase */
// https://salsita.github.io/node-pg-migrate/#/

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
    CREATE TABLE public.delivery_types (
      id serial NOT NULL,
      delivery_type varchar(50) NOT NULL,
      CONSTRAINT delivery_types_pkey PRIMARY KEY (id)
    );

    INSERT INTO public.delivery_types (delivery_type) 
      VALUES
        ('delivery'),
        ('counter_pickup'),
        ('on_spot_consumption')
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DELETE FROM public.delivery_types;
    DROP TABLE public.delivery_types;
  `)
};
