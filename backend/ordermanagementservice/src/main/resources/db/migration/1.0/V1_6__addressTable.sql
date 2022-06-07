CREATE TABLE IF NOT EXISTS `bc_31_database_service`.`address` (
  `address_id` BIGINT NOT NULL AUTO_INCREMENT,
  `house_no` VARCHAR(50) NULL,
  `area` VARCHAR(50) NULL,
  `city` VARCHAR(20) NULL,
  `state` VARCHAR(20) NULL,
  `zip` INT NULL,
  `user_id` BIGINT NULL,
  PRIMARY KEY (`address_id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `bc_31_database_service`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


insert into `bc_31_database_service`.address values (5,"1-5-42","Hyd","hyd","Tel","500011",1);

