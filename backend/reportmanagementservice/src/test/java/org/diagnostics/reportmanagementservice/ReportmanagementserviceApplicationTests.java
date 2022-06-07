package org.diagnostics.reportmanagementservice;

import org.diagnostics.reportmanagementservice.repository.ReportRepository;
import org.diagnostics.reportmanagementservice.service.ReportsService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class ReportmanagementserviceApplicationTests {

	@Autowired
	private ReportsService reportsService;
	@Autowired
	private ReportRepository reportRepository;

	@Test
	void contextLoads() {
		assertThat(reportsService).isNotNull();
		assertThat(reportRepository).isNotNull();
	}

}
