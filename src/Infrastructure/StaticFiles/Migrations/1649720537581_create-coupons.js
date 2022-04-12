/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.coupons (
    id serial NOT NULL,
    coupom_code varchar(50) NOT NULL,
    discount_type enum_coupons_discount_type NOT NULL,
    discount numeric(10, 2) NOT NULL,
    used int4 NULL DEFAULT 0,
    price_limit numeric(10, 2) NULL,
    date_limit timestamptz NULL,
    distance_limit_in_km int4 NULL,
    uses_limit int4 NULL,
    free_delivery bool NOT NULL DEFAULT true,
    is_active bool NOT NULL DEFAULT true,
    updated_at timestamptz NULL DEFAULT now(),
    created_at timestamptz NULL DEFAULT now(),
    CONSTRAINT coupons_pkey PRIMARY KEY (id)
  );
  CREATE INDEX coupons_coupom_code ON public.coupons USING btree (coupom_code);
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.coupons;
  `)
};
