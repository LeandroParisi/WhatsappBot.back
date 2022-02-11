sh ./1.new_service/1.create_folders.sh $1;
sh ./1.new_service/2.create_router.sh $1;
sh ./1.new_service/3.create_controller.sh $1;
sh ./1.new_service/4.create_services.sh $1;
sh ./1.new_service/5.create_queries.sh $1;
sh ./1.new_service/6.adds_controller_export $1;

