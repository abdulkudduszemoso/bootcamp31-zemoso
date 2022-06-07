CREATE TABLE IF NOT EXISTS `bc_31_database_service`.`lab` (
  `lab_id` BIGINT NOT NULL AUTO_INCREMENT,
  `lab_name` VARCHAR(30) NULL,
  `lab_location` VARCHAR(50) NULL,
  `lab_rating` FLOAT NULL,
  `slots_available` INT NULL,
  `created_at` DATETIME NULL,
  `updated_by` BIGINT NULL,
  PRIMARY KEY (`lab_id`))
ENGINE = InnoDB;



insert into `bc_31_database_service`.lab values (6,"ABC LABS","Hyd",4.5,5,"2022-05-19",1);


