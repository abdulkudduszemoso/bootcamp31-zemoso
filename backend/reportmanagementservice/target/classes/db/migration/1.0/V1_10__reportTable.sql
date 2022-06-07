CREATE TABLE IF NOT EXISTS `bc_31_database_service`.`report` (
  `report_id` INT NOT NULL AUTO_INCREMENT,
  `lab_name` VARCHAR(20) NOT NULL,
  `test_name` VARCHAR(20) NOT NULL,
  `report_status` VARCHAR(20) NULL,
  `report_date` VARCHAR(20) NULL,
  `report_generation_time` VARCHAR(20) NULL,
  `created_at` DATETIME NULL,
  `updated_by` BIGINT NULL,
  PRIMARY KEY (`report_id`))
ENGINE = InnoDB;


