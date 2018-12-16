package com.evernote.stepdefinitions;

import com.evernote.page.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinitions {
	@Given("^User is on Login Page$")
	public void user_is_on_Login_Page() throws Throwable {
		LoginPage.initialLaunch();
	}

	@When("^User login to the system with (.*) and (.*)$")
	public void user_login_to_the_system_with_anirudh_s_nair_gmail_com_and_anirudh_$(String email, String password)
			throws Throwable {
		LoginPage.EmailLogin(email);
		LoginPage.validLoginPassword(password);
	}

	@Then("^Homepage should be displayed$")
	public void homepage_should_be_displayed() throws Throwable {
		LoginPage.verifylogin();
	}

	@When("^User tries to login with a (.*)$")
	public void user_try_to_login_with_non_registered_email(String email) throws Throwable {
		LoginPage.EmailLogin(email);
	}

	@Then("^Warning message (.*) should be displayed$")
	public void warning_message_should_be_displayed(String message) throws Throwable {
		LoginPage.verifyValidationMessage(message);
	}

	@When("^User clicks on continue button without entering email$")
	public void user_clicks_on_continue_button_without_entering_email() throws Throwable {
		LoginPage.clickContinue();
	}

	@Then("^Warning message should be displayed$")
	public void warning_message_should_be_displayed() throws Throwable {
		LoginPage.verifyMessage();
	}

	@When("^User clicks on continue button by inputting (.*)$")
	public void user_clicks_on_continue_button_by_inputting_valid_email(String email) throws Throwable {
		LoginPage.EmailLogin(email);

	}

	@When("^User clicks on Sign in button without entering password$")
	public void user_clicks_on_Sign_in_button_without_entering_password() throws Throwable {
		LoginPage.clickSignInButton();
	}

	@When("^User checks Remember me for 30 days while login to the system with (.*) and (.*)$")
	public void user_checks_Remember_me_for_days_while_login_to_the_system_with_anirudh_s_nair_gmail_com_and_anirudh_$(
			String email, String password) throws Throwable {
		LoginPage.validLoginWithRememberMe(email, password);
	}

	@When("^Clicks on Sign Out button$")
	public void clicks_on_Sign_Out_button() throws Throwable {
		LoginPage.logout();

	}

	@Then("^(.*) should be prefilled in email input field$")
	public void anirudh_s_nair_gmail_com_should_be_prefilled_in_email_input_field(String email) throws Throwable {
		LoginPage.verifyRememberMe(email);
	}

	@When("^User un-checks Remember me for 30 days while login to the system with (.*) and (.*)$")
	public void user_un_checks_Remember_me_for_days_while_login_to_the_system_with_anirudh_s_nair_gmail_com_and_anirudh_$(
			String email, String password) throws Throwable {
		LoginPage.validLoginWithRememberMe(email, password);
	}

	@Then("^(.*) should be cleared in email input field$")
	public void anirudh_s_nair_gmail_com_should_be_cleared_in_email_input_field(String email) throws Throwable {
		LoginPage.VerifyPrefillClear(email);
	}

}
