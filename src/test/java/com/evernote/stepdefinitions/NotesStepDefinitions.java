package com.evernote.stepdefinitions;

import com.evernote.page.NotesPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NotesStepDefinitions {

	@Given("^User is logged into the system with (.*) and (.*)$")
	public void userLoginGiven(String email,String password) throws Throwable {
		NotesPage.initialLaunch();
		NotesPage.Login(email,password);
	   
	}

	
@When("^A note is created with (.*) and (.*)$")
public void a_note_is_created_with_title_and_body(String title,String body) throws Throwable {
   NotesPage.noteCreation(title,body);
}

@When("^Logout from Evernote$")
public void logout_from_Evernote() throws Throwable {
	NotesPage.logout(); 
}

@Then("^Created note should be available in the notes list with (.*) and (.*)$")
public void created_note_should_be_available_in_the_notes_list(String title,String body) throws Throwable {
	NotesPage.verifyNotes(title,body);
}




}
