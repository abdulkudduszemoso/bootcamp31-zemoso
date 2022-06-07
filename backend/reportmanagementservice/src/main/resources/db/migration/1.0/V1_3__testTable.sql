CREATE TABLE IF NOT EXISTS `bc_31_database_service`.`test` (
  `test_id` BIGINT NOT NULL AUTO_INCREMENT,
  `test_name` VARCHAR(20) NULL,
  `test_pricing` INT NULL,
  PRIMARY KEY (`test_id`))
ENGINE = InnoDB;


insert into `bc_31_database_service`.test values (7,"COVID-RTPCR",1500);

