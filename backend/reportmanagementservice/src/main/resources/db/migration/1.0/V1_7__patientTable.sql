CREATE TABLE IF NOT EXISTS `bc_31_database_service`.`patient` (
  `patient_id` BIGINT NOT NULL AUTO_INCREMENT,
  `user_id` BIGINT NULL,
  `patient_name` VARCHAR(30) NULL,
  `dob` VARCHAR(30) NULL,
  `relation` VARCHAR(20) NULL,
  `gender` VARCHAR(20) NULL,
  PRIMARY KEY (`patient_id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_idz`
    FOREIGN KEY (`user_id`)
    REFERENCES `bc_31_database_service`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



insert into `bc_31_database_service`.patient values (2,1,"Vineet G","1999-08-15","SELF","MALE");
