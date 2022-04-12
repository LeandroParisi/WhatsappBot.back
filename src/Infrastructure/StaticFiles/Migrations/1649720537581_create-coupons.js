/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
  CREATE TABLE public.coupons (
    id serial NOT NULL,
    coupomCode varchar(50) NOT NULL,
    discountType enum_coupons_discount_type NOT NULL,
    discount numeric(10, 2) NOT NULL,
    used int4 NULL DEFAULT 0,
    priceLimit numeric(10, 2) NULL,
    dateLimit timestamptz NULL,
    distanceLimitInKm int4 NULL,
    usesLimit int4 NULL,
    freeDelivery bool NOT NULL DEFAULT true,
    isActive bool NOT NULL DEFAULT true,
    updatedAt timestamptz NULL DEFAULT now(),
    createdAt timestamptz NULL DEFAULT now(),
    CONSTRAINT coupons_pkey PRIMARY KEY (id)
  );
  CREATE INDEX coupons_coupom_code ON public.coupons USING btree (coupomCode);
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE public.coupons;
  `)
};
