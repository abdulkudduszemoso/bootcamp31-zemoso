CREATE TABLE IF NOT EXISTS `bc_31_database_service`.`order` (
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `order_price` INT NULL,
  `status` VARCHAR(20) NULL,
  `booked_date` DATE NULL,
  `appointment_id` BIGINT NULL,
  `user_id` BIGINT NULL,
  `created_at` DATETIME NULL,
  `updated_by` BIGINT NULL,
  PRIMARY KEY (`order_id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `appointment_id_idx` (`appointment_id` ASC) VISIBLE,
  CONSTRAINT `user_idp`
    FOREIGN KEY (`user_id`)
    REFERENCES `bc_31_database_service`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `appointment_idp`
    FOREIGN KEY (`appointment_id`)
    REFERENCES `bc_31_database_service`.`appointment` (`appointment_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


insert into `bc_31_database_service`.order values (3,1500,"Confirmed","2022-05-19",9,1,"2022-05-19",1);
