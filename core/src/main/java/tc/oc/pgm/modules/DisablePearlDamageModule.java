package tc.oc.pgm.modules;

import java.util.logging.Logger;
import org.jdom2.Document;
import org.jdom2.Element;
import tc.oc.pgm.api.map.MapModule;
import tc.oc.pgm.api.map.factory.MapFactory;
import tc.oc.pgm.api.map.factory.MapModuleFactory;
import tc.oc.pgm.api.match.Match;
import tc.oc.pgm.api.match.MatchModule;
import tc.oc.pgm.util.xml.InvalidXMLException;

public class DisablePearlDamageModule implements MapModule {

  @Override
  public MatchModule createMatchModule(Match match) {
    return new DisablePearlDamageMatchModule(match);
  }

  public static class Factory implements MapModuleFactory<DisablePearlDamageModule> {
    @Override
    public DisablePearlDamageModule parse(MapFactory factory, Logger logger, Document doc)
        throws InvalidXMLException {
      Element el = doc.getRootElement().getChild("disable-pearl-damage");
      if (el == null) {
        return new DisablePearlDamageModule();
      }

      return null;
    }
  }
}
