package com.evernote.page;

import java.io.IOException;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import genericpackage.GenericMethods;

public class LoginPage {
	static String loginButton = "//a[contains(text(),'Log in')]";
	static String emailInputBox = "//input[@id='username']";
	static String continueButton = "//input[@id='loginButton']";
	static String passwordInputBox = ".//div//input[@id='password']";
	static String signInButton = "//input[@id='loginButton']";
	static String username = "//*[@id='qa-NAV_USER']/div/div/span/div/div[1]";
	static String signOutLink = "//div[contains(text(),'Sign out')]";
	static String responseMessage = "//div[@id='responseMessage']";
	static String rememberMe = "//input[@id='rememberMe']";

	static String url = GenericMethods.props.getProperty("URL");
	static WebDriverWait wait;

	public static void initialLaunch() throws IOException {
		GenericMethods.driver.get(url);
		GenericMethods.driver.manage().window().maximize();
		wait = new WebDriverWait(GenericMethods.driver, 50);
		GenericMethods.driver.findElement(By.xpath(loginButton)).click();
	}

	public static void validLoginPassword(String password) throws InterruptedException {
  		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(passwordInputBox)));
		GenericMethods.driver.findElement(By.xpath(passwordInputBox)).sendKeys(password);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(signInButton)));
		GenericMethods.driver.findElement(By.xpath(signInButton)).click();

	}

	public static void navgateToLogin() throws IOException {
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(loginButton)));
		GenericMethods.driver.findElement(By.xpath(loginButton)).click();
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(emailInputBox)));

	}

	public static void logout() {
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(username)));
		GenericMethods.driver.findElement(By.xpath(username)).click();
		GenericMethods.driver.findElement(By.xpath(signOutLink)).click();

	}

	public static void verifylogin() {
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(username)));
		Assert.assertTrue(GenericMethods.driver.findElement(By.xpath(username)).isDisplayed());
		Boolean L=GenericMethods.driver.findElement(By.xpath(username)).isDisplayed();
		GenericMethods.getReport(L, "Registered user login", "Verify that registered user is able to login the Evernote","Registered user is able to login","Registered user is unable to login");
		logout();
	}

	public static void EmailLogin(String email) {
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(emailInputBox)));
		GenericMethods.driver.findElement(By.xpath(emailInputBox)).sendKeys(email);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(continueButton)));
		GenericMethods.driver.findElement(By.xpath(continueButton)).click();
	}

	public static void verifyValidationMessage(String message) {
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(responseMessage)));
		Assert.assertTrue(GenericMethods.driver.getPageSource().contains(message));
		Boolean L=GenericMethods.driver.getPageSource().contains(message);
		GenericMethods.getReport(L, "Warning message:"+message, "Verify that proper warning message is displayed"+message,"Proper warning message is displayed: "+message,"No warning message is displayed");
	}

	public static void clickContinue() {
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(continueButton)));
		GenericMethods.driver.findElement(By.xpath(continueButton)).click();
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(continueButton)));

	}

	public static void verifyMessage() {
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(responseMessage)));
		Assert.assertTrue(GenericMethods.driver.getPageSource().contains("Required data missing"));
		Boolean L=GenericMethods.driver.getPageSource().contains("Required data missing");
		GenericMethods.getReport(L, "Warning message on leaving email as blank", "Verify that proper warning message is displayed on leaving email as blank","Proper warning message is displayed: "+"Required data missing"+"on leaving email as blank","No warning message is displayed on leaving email as blank");

	}

	public static void clickSignInButton() {
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(signInButton)));
		GenericMethods.driver.findElement(By.xpath(signInButton)).click();
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(signInButton)));
	}

	public static void validLoginWithRememberMe(String email, String password) {
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(continueButton)));
		GenericMethods.driver.findElement(By.xpath(emailInputBox)).sendKeys(email);
		GenericMethods.driver.findElement(By.xpath(rememberMe)).click();
		GenericMethods.driver.findElement(By.xpath(continueButton)).click();
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(passwordInputBox)));
		GenericMethods.driver.findElement(By.xpath(passwordInputBox)).sendKeys(password);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(signInButton)));
		GenericMethods.driver.findElement(By.xpath(signInButton)).click();

	}

	public static void verifyRememberMe(String email) {
		Assert.assertEquals(GenericMethods.driver.findElement(By.xpath(emailInputBox)).getAttribute("value"), email);
		Boolean L=GenericMethods.driver.findElement(By.xpath(emailInputBox)).getAttribute("value").equals(email);
		GenericMethods.getReport(L, "Prefilling of email id on checking \"Remember me for 30 days\" checkbox", "Verify that the email id prefilled on checking \"Remember me for 30 days\"","Remember me functionality is working fine","Remember me functionality is not working");

	}

	public static void VerifyPrefillClear(String email) {
		Assert.assertFalse(
				GenericMethods.driver.findElement(By.xpath(emailInputBox)).getAttribute("value").equals(email));
		Boolean L=!(GenericMethods.driver.findElement(By.xpath(emailInputBox)).getAttribute("value").equals(email));
		GenericMethods.getReport(L, "Clearing of email id on un-checking \"Remember me for 30 days\" checkbox", "Verify that the email id cleared on un-checking \"Remember me for 30 days\"","Prefilled email is cleared","Prefilled email is not cleared");

	}

}
