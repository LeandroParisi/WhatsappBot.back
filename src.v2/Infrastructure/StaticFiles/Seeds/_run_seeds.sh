SEEDS_PATH=./src.v2/Infrastructure/StaticFiles/Seeds

psql postgres -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/branches.sql;
psql postgres -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/branches_delivery_types.sql;
psql postgres -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/branches_delivery_types.sql;
psql postgres -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/branches_delivery_types.sql;

psql postgres -h 127.0.0.1 -d ta_on -U leandro_parisi -f $SEEDS_PATH/branches_delivery_types.sql;