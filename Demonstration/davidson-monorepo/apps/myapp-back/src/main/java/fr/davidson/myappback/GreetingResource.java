package fr.davidson.myappback;

import fr.davidson.service.DateService;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/hello")
public class GreetingResource {

  @Inject
  DateService dateService;

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public String hello() {
    return String.format(
      "{\"Hello\":\"From myapp-back at %s\"}",
      dateService.getDate()
    );
  }
}
