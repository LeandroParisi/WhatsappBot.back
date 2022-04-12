/* eslint-disable camelcase */
// https://salsita.github.io/node-pg-migrate/#/

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
    CREATE DOMAIN "deliveryFeesJsonb" AS "jsonb";

    CREATE DOMAIN "openingHours" AS "jsonb";

    CREATE TYPE public.enum_coupons_discount_type AS ENUM (
      'percentage',
      'absolute_value'
    );

    CREATE DOMAIN "attributes" AS "jsonb";

    CREATE DOMAIN "productAttributes" AS "jsonb";

  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP DOMAIN "deliveryFeesJsonb";
    DROP DOMAIN "openingHours";
    DROP DOMAIN "attributes";
    DROP DOMAIN "productAttributes";
    DROP TYPE public.enum_coupons_discount_type;
  `)
};
