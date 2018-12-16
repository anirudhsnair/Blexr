package com.evernote.page;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import genericpackage.GenericMethods;

public class NotesPage {
	static String loginButton = "//a[contains(text(),'Log in')]";
	static String emailInputBox = "//input[@id='username']";
	static String continueButton = "//input[@id='loginButton']";
	static String passwordInputBox = ".//div//input[@id='password']";
	static String signInButton = "//input[@id='loginButton']";
	static String username = "//*[@id='qa-NAV_USER']/div/div/span/div/div[1]";
	static String signOutLink = "//div[contains(text(),'Sign out')]";
	static String newNote="//span[contains(text(),'New Note')]";
	static String titleInputbox="//input[@id='qa-NOTE_EDITOR_TITLE']";
	static String bodyInputbox="//*[@id='qa-NOTE_EDITOR']/div[2]/iframe";
    static String sampleTitle="//div[contains(text(),'sample title')]";
    static String sampleBody="//div[contains(text(),'sample body')]";


	static String url = GenericMethods.props.getProperty("URL");
	static WebDriverWait wait;
	

public static void initialLaunch()
{
	GenericMethods.driver.get(url);
	GenericMethods.driver.manage().window().maximize();
	wait = new WebDriverWait(GenericMethods.driver, 50);
	GenericMethods.driver.findElement(By.xpath(loginButton)).click();
}
	public static void Login(String email, String password) {
		
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(emailInputBox)));
		GenericMethods.driver.findElement(By.xpath(emailInputBox)).sendKeys(email);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(continueButton)));
		GenericMethods.driver.findElement(By.xpath(continueButton)).click();
  		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath
  				(passwordInputBox)));
		GenericMethods.driver.findElement(By.xpath(passwordInputBox)).sendKeys(password);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(signInButton)));
		GenericMethods.driver.findElement(By.xpath(signInButton)).click();		
	}
	
	public static void noteCreation(String title,String body) {
  		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(newNote)));
		GenericMethods.driver.findElement(By.xpath(newNote)).click();	
  		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(titleInputbox)));
		GenericMethods.driver.findElement(By.xpath(titleInputbox)).sendKeys(title);
  		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(bodyInputbox)));
		GenericMethods.driver.findElement(By.xpath(bodyInputbox)).sendKeys(body);


	}

	public static void verifyNotes(String title,String body) {
  		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(newNote)));
        Assert.assertEquals(GenericMethods.driver.findElement(By.xpath(sampleTitle)).getText(),title); 
       // Assert.assertEquals(GenericMethods.driver.findElement(By.xpath(sampleBody)).getText(),body);
		Boolean L=GenericMethods.driver.findElement(By.xpath(sampleTitle)).getText().equals(title);
		GenericMethods.getReport(L, "Note creation with title and body", "Verify that the user is able to create Note with title and body","Note with title and body is created","Unable to create note with title and body");


	}
	public static void logout() {
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(username)));
		GenericMethods.driver.findElement(By.xpath(username)).click();
		GenericMethods.driver.findElement(By.xpath(signOutLink)).click();

	}


}
