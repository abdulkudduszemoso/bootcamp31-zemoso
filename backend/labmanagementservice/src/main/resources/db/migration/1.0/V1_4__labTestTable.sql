CREATE TABLE IF NOT EXISTS `bc_31_database_service`.`lab_test` (
  `test_id` BIGINT NOT NULL,
  `lab_id` BIGINT NOT NULL,
  PRIMARY KEY (`test_id`, `lab_id`),
  INDEX `lab_id_idx` (`lab_id` ASC) VISIBLE,
  CONSTRAINT `test_id`
    FOREIGN KEY (`test_id`)
    REFERENCES `bc_31_database_service`.`test` (`test_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `lab_id`
    FOREIGN KEY (`lab_id`)
    REFERENCES `bc_31_database_service`.`lab` (`lab_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


insert into `bc_31_database_service`.lab_test values (7,6);

