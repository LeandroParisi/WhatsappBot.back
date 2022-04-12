SEEDS_PATH=./src.v2/Infrastructure/StaticFiles/Seeds
PGPASSWORD=123deolivera4

PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/0_users.sql;
PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/1_branches.sql;
PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/1_coupons.sql;
PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/1_customers.sql;
PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/1_menus.sql;
PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/1_opening_hours.sql;
PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/1_orders.sql;
PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/1_products.sql;
PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/1_promotions.sql;
PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/2_branches_delivery_types.sql;
PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/3_branches_menus.sql;
PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/4_branches_payment_methods.sql;
PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/5_branches_products.sql;
PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/6_branches_promotions.sql;
PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/8_coupons_branches.sql;
PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/9_coupons_conditions.sql;
PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/10_customer_addresses.sql;
PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/13_menus_products.sql;
PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/16_orders_products.sql;
PGPASSWORD=$PGPASSWORD psql -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/19_promotions_products.sql;






















