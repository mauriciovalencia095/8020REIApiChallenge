package co.REI.runner;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features",
        glue = "co.REI",
        plugin = {
                "pretty",
                "json:target/cucumber.json"
        },
        monochrome = true
)
public class TestRunner {
}
