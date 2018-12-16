package genericpackage;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

public class GenericMethods {
	public static StringBuffer verificationErrors;
	public static String value;
	public static String FieldVal;
	public static String strCellValue;
	private static String path;
	private static Object browser;
	public static WebDriver driver;
	public static Properties props;
	private static String TestReport;
	private static ExtentReports extent;
	public static void setup() throws IOException {
		FileInputStream objfile = new FileInputStream("src\\test\\resources\\Configuration\\Config.properties");
		props = new Properties();
		props.load(objfile);
		browser = props.getProperty("Browser");
		if (browser.equals("Chrome")) {
			System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\Drivers\\chromedriver.exe");
			driver = new ChromeDriver();

		} else if (browser.equals("Phantom")) {
			System.setProperty("phantomjs.binary.path", "src\\test\\resources\\Drivers\\phantomjs.exe");
			driver = new PhantomJSDriver();
		} else if (browser.equals("Firefox")) {
			System.setProperty("webdriver.gecko.driver", "src\\test\\resources\\Drivers\\geckodriver.exe");
			driver = new FirefoxDriver();
		}

	}

	public static void closeBrowser() {
		GenericMethods.driver.quit();
	}

	public static void captureScreenshot() throws Exception {
		File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		path = ".\\reports\\errorSnapshots\\" + new Object() {
		}.getClass().getEnclosingMethod().getName() + ".png";
		FileUtils.copyFile(scrFile, new File(path));

	}

	public static void setReport() {
		TestReport = System.getProperty("user.dir") + ".\\reports\\TestReport.html";
		extent = new ExtentReports(TestReport, true);

	}

	public static void getReport(Boolean L, String functionality, String verification, String passMsg,
			String failureMsg) {
		ExtentTest extentTest = extent.startTest(functionality, verification);
		if (L.equals(true)) {
			extentTest.log(LogStatus.PASS, passMsg);
		} else {
			extentTest.log(LogStatus.FAIL, failureMsg);
			extentTest.log(LogStatus.INFO, "Error Snapshot : " + extentTest.addScreenCapture(path));

		}
		extent.endTest(extentTest);
		extent.flush();
	}
}
