/**
 * 
 */
/**
 * @author Anirudh
 *
 */
package com.evernote.runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import genericpackage.GenericMethods;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features/", glue = "com.evernote.stepdefinitions", plugin = { "pretty",
		"html:reports" }, monochrome = true)

public class TestRunner {
	@BeforeClass
	public static void setup() throws IOException {
		GenericMethods.setup();
		GenericMethods.setReport();
	}
	
	 @AfterClass
	 public static void teardown() {
	 GenericMethods.closeBrowser();
	 }

}
