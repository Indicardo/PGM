package tc.oc.pgm.modules;

import org.bukkit.event.EventHandler;
import org.bukkit.event.EventPriority;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerTeleportEvent;
import tc.oc.pgm.api.match.Match;
import tc.oc.pgm.api.match.MatchModule;
import tc.oc.pgm.api.match.MatchScope;
import tc.oc.pgm.api.player.MatchPlayer;
import tc.oc.pgm.events.ListenerScope;

@ListenerScope(MatchScope.RUNNING)
public class DisablePearlDamageMatchModule implements MatchModule, Listener {

  private final Match match;

  public DisablePearlDamageMatchModule(Match match) {
    this.match = match;
  }

  @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = true)
  public void DisablePearlDamage(PlayerTeleportEvent event) {
    MatchPlayer player = this.match.getPlayer(event.getPlayer());
    if (event.getCause() == PlayerTeleportEvent.TeleportCause.ENDER_PEARL) {
      event.setCancelled(true);
      player.getBukkit().setNoDamageTicks(1);
      player.getBukkit().teleport(event.getTo());
    }
  }
}
