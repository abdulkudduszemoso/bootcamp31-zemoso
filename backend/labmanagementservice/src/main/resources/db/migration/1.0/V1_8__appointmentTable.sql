CREATE TABLE IF NOT EXISTS `bc_31_database_service`.`appointment` (
  `appointment_id` BIGINT NOT NULL AUTO_INCREMENT,
  `address_id` BIGINT NULL,
  `patient_id` BIGINT NULL,
  `test_id` BIGINT NULL,
  `user_id` BIGINT NULL,
  `lab_id` BIGINT NULL,
  `appointment_time` VARCHAR(20) NULL,
  `appointment_day` DATETIME NULL,
  `appointment_month` DATETIME NULL,
  PRIMARY KEY (`appointment_id`),
  INDEX `address_id_idx` (`address_id` ASC) VISIBLE,
  INDEX `patient_id_idx` (`patient_id` ASC) VISIBLE,
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `test_id_idx` (`test_id` ASC) VISIBLE,
  INDEX `lab_id_idx` (`lab_id` ASC) VISIBLE,
  CONSTRAINT `address_id`
    FOREIGN KEY (`address_id`)
    REFERENCES `bc_31_database_service`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `patient_idl`
    FOREIGN KEY (`patient_id`)
    REFERENCES `bc_31_database_service`.`patient` (`patient_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `test_idl`
    FOREIGN KEY (`test_id`)
    REFERENCES `bc_31_database_service`.`lab_test` (`test_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user_idl`
    FOREIGN KEY (`user_id`)
    REFERENCES `bc_31_database_service`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `lab_idl`
    FOREIGN KEY (`lab_id`)
    REFERENCES `bc_31_database_service`.`lab_test` (`lab_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



insert into `bc_31_database_service`.appointment values (9,5,2,7,1,6,"2pm","2022-05-01","2022-05-01");
