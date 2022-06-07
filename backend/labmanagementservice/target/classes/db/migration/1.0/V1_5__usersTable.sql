CREATE TABLE IF NOT EXISTS `bc_31_database_service`.`user` (
  `user_id` BIGINT NOT NULL   AUTO_INCREMENT,
  `firstname` VARCHAR(30) NULL,
  `lastname` VARCHAR(30) NULL,
  `email_id` VARCHAR(30) NULL,
  `role` VARCHAR(30) NULL,
  `mobile_num` BIGINT NULL,
  `created_at` DATETIME NULL,
  `updated_by` BIGINT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;



insert into `bc_31_database_service`.user values (1,"Shanker","Sai","shanker@gmal.com","ADMIN",8919450861,"2022-05-19",1);

