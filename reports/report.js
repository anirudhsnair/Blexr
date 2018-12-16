$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality of Evernote",
  "description": "",
  "id": "login-functionality-of-evernote",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Registered user login",
  "description": "",
  "id": "login-functionality-of-evernote;registered-user-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User login to the system with \u003cemail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Homepage should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "login-functionality-of-evernote;registered-user-login;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 8,
      "id": "login-functionality-of-evernote;registered-user-login;;1"
    },
    {
      "cells": [
        "anirudh.s.nair@gmail.com",
        "anirudh123$"
      ],
      "line": 9,
      "id": "login-functionality-of-evernote;registered-user-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Registered user login",
  "description": "",
  "id": "login-functionality-of-evernote;registered-user-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User login to the system with anirudh.s.nair@gmail.com and anirudh123$",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Homepage should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 19531610884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anirudh.s.nair@gmail.com",
      "offset": 30
    },
    {
      "val": "anirudh123$",
      "offset": 59
    }
  ],
  "location": "LoginStepDefinitions.user_login_to_the_system_with_anirudh_s_nair_gmail_com_and_anirudh_$(String,String)"
});
formatter.result({
  "duration": 6247802951,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.homepage_should_be_displayed()"
});
formatter.result({
  "duration": 12875753604,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Warning message for non-registered email",
  "description": "",
  "id": "login-functionality-of-evernote;warning-message-for-non-registered-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User tries to login with a \u003cnon registered-email\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Warning message \u003cwarning message\u003e should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-functionality-of-evernote;warning-message-for-non-registered-email;",
  "rows": [
    {
      "cells": [
        "non registered-email",
        "warning message"
      ],
      "line": 16,
      "id": "login-functionality-of-evernote;warning-message-for-non-registered-email;;1"
    },
    {
      "cells": [
        "anirudh458@gmail.com",
        "There is no account for the username or email you entered."
      ],
      "line": 17,
      "id": "login-functionality-of-evernote;warning-message-for-non-registered-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Warning message for non-registered email",
  "description": "",
  "id": "login-functionality-of-evernote;warning-message-for-non-registered-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User tries to login with a anirudh458@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Warning message There is no account for the username or email you entered. should be displayed",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 4621407176,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anirudh458@gmail.com",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinitions.user_try_to_login_with_non_registered_email(String)"
});
formatter.result({
  "duration": 959917899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "There is no account for the username or email you entered.",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinitions.warning_message_should_be_displayed(String)"
});
formatter.result({
  "duration": 166846961,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Warning message for wrong password",
  "description": "",
  "id": "login-functionality-of-evernote;warning-message-for-wrong-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User login to the system with \u003cvalid email\u003e and \u003cinvalid password\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Warning message \u003cwarning message\u003e should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-functionality-of-evernote;warning-message-for-wrong-password;",
  "rows": [
    {
      "cells": [
        "valid email",
        "invalid password",
        "warning message"
      ],
      "line": 24,
      "id": "login-functionality-of-evernote;warning-message-for-wrong-password;;1"
    },
    {
      "cells": [
        "anirudh.s.nair@gmail.com",
        "anirudh857$",
        "Incorrect password. You modified your password in the past 24 hours."
      ],
      "line": 25,
      "id": "login-functionality-of-evernote;warning-message-for-wrong-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Warning message for wrong password",
  "description": "",
  "id": "login-functionality-of-evernote;warning-message-for-wrong-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User login to the system with anirudh.s.nair@gmail.com and anirudh857$",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Warning message Incorrect password. You modified your password in the past 24 hours. should be displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 3684749017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anirudh.s.nair@gmail.com",
      "offset": 30
    },
    {
      "val": "anirudh857$",
      "offset": 59
    }
  ],
  "location": "LoginStepDefinitions.user_login_to_the_system_with_anirudh_s_nair_gmail_com_and_anirudh_$(String,String)"
});
formatter.result({
  "duration": 3771483126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrect password. You modified your password in the past 24 hours.",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinitions.warning_message_should_be_displayed(String)"
});
formatter.result({
  "duration": 203120781,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Warning message on leaving email as blank",
  "description": "",
  "id": "login-functionality-of-evernote;warning-message-on-leaving-email-as-blank",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User clicks on continue button without entering email",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Warning message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 4491041704,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_continue_button_without_entering_email()"
});
formatter.result({
  "duration": 899122464,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.warning_message_should_be_displayed()"
});
formatter.result({
  "duration": 98576935,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Warning message on leaving password as blank",
  "description": "",
  "id": "login-functionality-of-evernote;warning-message-on-leaving-password-as-blank",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User clicks on continue button by inputting \u003cvalid email\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User clicks on Sign in button without entering password",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Warning message \u003cwarning message\u003e should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "login-functionality-of-evernote;warning-message-on-leaving-password-as-blank;",
  "rows": [
    {
      "cells": [
        "valid email",
        "warning message"
      ],
      "line": 39,
      "id": "login-functionality-of-evernote;warning-message-on-leaving-password-as-blank;;1"
    },
    {
      "cells": [
        "anirudh.s.nair@gmail.com",
        "This is a required field."
      ],
      "line": 40,
      "id": "login-functionality-of-evernote;warning-message-on-leaving-password-as-blank;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "Warning message on leaving password as blank",
  "description": "",
  "id": "login-functionality-of-evernote;warning-message-on-leaving-password-as-blank;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User clicks on continue button by inputting anirudh.s.nair@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User clicks on Sign in button without entering password",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Warning message This is a required field. should be displayed",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 2367050553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anirudh.s.nair@gmail.com",
      "offset": 44
    }
  ],
  "location": "LoginStepDefinitions.user_clicks_on_continue_button_by_inputting_valid_email(String)"
});
formatter.result({
  "duration": 645586324,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_Sign_in_button_without_entering_password()"
});
formatter.result({
  "duration": 1248680449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a required field.",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinitions.warning_message_should_be_displayed(String)"
});
formatter.result({
  "duration": 188733061,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "Prefilling of email id on checking \"Remember me for 30 days\" checkbox",
  "description": "",
  "id": "login-functionality-of-evernote;prefilling-of-email-id-on-checking-\"remember-me-for-30-days\"-checkbox",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "User checks Remember me for 30 days while login to the system with \u003cemail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Clicks on Sign Out button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User is on Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "\u003cemail\u003e should be prefilled in email input field",
  "keyword": "Then "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "login-functionality-of-evernote;prefilling-of-email-id-on-checking-\"remember-me-for-30-days\"-checkbox;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 49,
      "id": "login-functionality-of-evernote;prefilling-of-email-id-on-checking-\"remember-me-for-30-days\"-checkbox;;1"
    },
    {
      "cells": [
        "anirudh.s.nair@gmail.com",
        "anirudh123$"
      ],
      "line": 50,
      "id": "login-functionality-of-evernote;prefilling-of-email-id-on-checking-\"remember-me-for-30-days\"-checkbox;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 50,
  "name": "Prefilling of email id on checking \"Remember me for 30 days\" checkbox",
  "description": "",
  "id": "login-functionality-of-evernote;prefilling-of-email-id-on-checking-\"remember-me-for-30-days\"-checkbox;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "User checks Remember me for 30 days while login to the system with anirudh.s.nair@gmail.com and anirudh123$",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Clicks on Sign Out button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User is on Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "anirudh.s.nair@gmail.com should be prefilled in email input field",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 4150398405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anirudh.s.nair@gmail.com",
      "offset": 67
    },
    {
      "val": "anirudh123$",
      "offset": 96
    }
  ],
  "location": "LoginStepDefinitions.user_checks_Remember_me_for_days_while_login_to_the_system_with_anirudh_s_nair_gmail_com_and_anirudh_$(String,String)"
});
formatter.result({
  "duration": 4268467199,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.clicks_on_Sign_Out_button()"
});
formatter.result({
  "duration": 6813639279,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 3013432818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anirudh.s.nair@gmail.com",
      "offset": 0
    }
  ],
  "location": "LoginStepDefinitions.anirudh_s_nair_gmail_com_should_be_prefilled_in_email_input_field(String)"
});
formatter.result({
  "duration": 417991504,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 52,
  "name": "Clearing of email id on un-checking \"Remember me for 30 days\" checkbox",
  "description": "",
  "id": "login-functionality-of-evernote;clearing-of-email-id-on-un-checking-\"remember-me-for-30-days\"-checkbox",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "User un-checks Remember me for 30 days while login to the system with \u003cemail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "Clicks on Sign Out button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User is on Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "\u003cemail\u003e should be cleared in email input field",
  "keyword": "Then "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "login-functionality-of-evernote;clearing-of-email-id-on-un-checking-\"remember-me-for-30-days\"-checkbox;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 59,
      "id": "login-functionality-of-evernote;clearing-of-email-id-on-un-checking-\"remember-me-for-30-days\"-checkbox;;1"
    },
    {
      "cells": [
        "anirudh.s.nair@gmail.com",
        "anirudh123$"
      ],
      "line": 60,
      "id": "login-functionality-of-evernote;clearing-of-email-id-on-un-checking-\"remember-me-for-30-days\"-checkbox;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 60,
  "name": "Clearing of email id on un-checking \"Remember me for 30 days\" checkbox",
  "description": "",
  "id": "login-functionality-of-evernote;clearing-of-email-id-on-un-checking-\"remember-me-for-30-days\"-checkbox;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "User un-checks Remember me for 30 days while login to the system with anirudh.s.nair@gmail.com and anirudh123$",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "Clicks on Sign Out button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User is on Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "anirudh.s.nair@gmail.com should be cleared in email input field",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 3713683041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anirudh.s.nair@gmail.com",
      "offset": 70
    },
    {
      "val": "anirudh123$",
      "offset": 99
    }
  ],
  "location": "LoginStepDefinitions.user_un_checks_Remember_me_for_days_while_login_to_the_system_with_anirudh_s_nair_gmail_com_and_anirudh_$(String,String)"
});
formatter.result({
  "duration": 794420412,
  "error_message": "org.openqa.selenium.InvalidElementStateException: invalid element state\n  (Session info: chrome\u003d70.0.3538.110)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 36 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Machine\u0027, ip: \u0027192.168.42.52\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab), userDataDir\u003dC:\\Users\\Anirudh\\AppData\\Local\\Temp\\scoped_dir1740_22199}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d70.0.3538.110, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 644100113d608da37ed09e378ab3e0f4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:98)\r\n\tat com.evernote.page.LoginPage.validLoginWithRememberMe(LoginPage.java:103)\r\n\tat com.evernote.stepdefinitions.LoginStepDefinitions.user_un_checks_Remember_me_for_days_while_login_to_the_system_with_anirudh_s_nair_gmail_com_and_anirudh_$(LoginStepDefinitions.java:78)\r\n\tat ✽.When User un-checks Remember me for 30 days while login to the system with anirudh.s.nair@gmail.com and anirudh123$(Login.feature:54)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinitions.clicks_on_Sign_Out_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_Login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "anirudh.s.nair@gmail.com",
      "offset": 0
    }
  ],
  "location": "LoginStepDefinitions.anirudh_s_nair_gmail_com_should_be_cleared_in_email_input_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Notes.feature");
formatter.feature({
  "line": 1,
  "name": "Note creation functionality of Evernote",
  "description": "",
  "id": "note-creation-functionality-of-evernote",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Note creation with title and body",
  "description": "",
  "id": "note-creation-functionality-of-evernote;note-creation-with-title-and-body",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is logged into the system with \u003cemail\u003e and \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "A note is created with \u003ctitle\u003e and \u003cbody\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Logout from Evernote",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User is logged into the system with \u003cemail\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Created note should be available in the notes list with \u003ctitle\u003e and \u003cbody\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "note-creation-functionality-of-evernote;note-creation-with-title-and-body;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "title",
        "body"
      ],
      "line": 10,
      "id": "note-creation-functionality-of-evernote;note-creation-with-title-and-body;;1"
    },
    {
      "cells": [
        "anirudh.s.nair@gmail.com",
        "anirudh123$",
        "sample title",
        "sample body"
      ],
      "line": 11,
      "id": "note-creation-functionality-of-evernote;note-creation-with-title-and-body;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Note creation with title and body",
  "description": "",
  "id": "note-creation-functionality-of-evernote;note-creation-with-title-and-body;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is logged into the system with anirudh.s.nair@gmail.com and anirudh123$",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "A note is created with sample title and sample body",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Logout from Evernote",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User is logged into the system with anirudh.s.nair@gmail.com and anirudh123$",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Created note should be available in the notes list with sample title and sample body",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "anirudh.s.nair@gmail.com",
      "offset": 36
    },
    {
      "val": "anirudh123$",
      "offset": 65
    }
  ],
  "location": "NotesStepDefinitions.userLoginGiven(String,String)"
});
formatter.result({
  "duration": 3544007622,
  "error_message": "org.openqa.selenium.InvalidElementStateException: invalid element state\n  (Session info: chrome\u003d70.0.3538.110)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 39 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Machine\u0027, ip: \u0027192.168.42.52\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab), userDataDir\u003dC:\\Users\\Anirudh\\AppData\\Local\\Temp\\scoped_dir1740_22199}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d70.0.3538.110, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 644100113d608da37ed09e378ab3e0f4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:98)\r\n\tat com.evernote.page.NotesPage.Login(NotesPage.java:44)\r\n\tat com.evernote.stepdefinitions.NotesStepDefinitions.userLoginGiven(NotesStepDefinitions.java:14)\r\n\tat ✽.Given User is logged into the system with anirudh.s.nair@gmail.com and anirudh123$(Notes.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "sample title",
      "offset": 23
    },
    {
      "val": "sample body",
      "offset": 40
    }
  ],
  "location": "NotesStepDefinitions.a_note_is_created_with_title_and_body(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NotesStepDefinitions.logout_from_Evernote()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "anirudh.s.nair@gmail.com",
      "offset": 36
    },
    {
      "val": "anirudh123$",
      "offset": 65
    }
  ],
  "location": "NotesStepDefinitions.userLoginGiven(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sample title",
      "offset": 56
    },
    {
      "val": "sample body",
      "offset": 73
    }
  ],
  "location": "NotesStepDefinitions.created_note_should_be_available_in_the_notes_list(String,String)"
});
formatter.result({
  "status": "skipped"
});
});