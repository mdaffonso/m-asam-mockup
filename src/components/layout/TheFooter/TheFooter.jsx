import { Container } from "@/components"
import styles from "./TheFooter.module.scss"
import { useState } from "react"

import logo from "@/assets/logo-bw.png"
import socialYT from "@/assets/icon-social-youtube.png"
import socialFB from "@/assets/icon-social-facebook.png"
import socialIG from "@/assets/icon-social-instagram.png"
import socialPT from "@/assets/icon-social-pinterest.png"

export const TheFooter = () => {
  const [ finePrintExpanded, setFinePrintExpanded ] = useState(false)

  const toggleMapItem = (e) => {
    const object = e.target
    object.setAttribute("data-expanded", object.getAttribute("data-expanded") === "true" ? "false" : "true")
    object.setAttribute("data-icon", object.getAttribute("data-icon") === "⮟" ? "⮝" : "⮟")
  }

  return (
    <footer>
      <section className={styles.FinePrint} data-expanded={finePrintExpanded}>
        <Container>
          <div className={styles.Logo}>
            <img src={logo} alt="asambeauty logo" />
          </div>

          <h5>Make-up: Mit ein paar Handgriffen zum perfekten Look</h5>
          <p>Make-up und die richtige Schminktechnik perfektionieren das Gesicht mit raffinierten optischen Täuschungen: Foundation lässt die Haut ebenmäßig wirken und Müdigkeitsspuren verschwinden. Rouge schenkt dem Teint einen Hauch gesunder Frische. Augen Make-up macht die Augen zu Eyecatchern und korrigiert die Augenform optisch. Mascara zaubert einen magischen Augenaufschlag mit langen, dichten Wimpern. Augenbrauen Make-up füllt feine Lücken auf und schenkt dem Blick den perfekten Rahmen. Die Lippen zu schminken lässt den Mund verführerisch und gepflegt wirken.</p>
          <p>Nicht zuletzt hat Make-up das einzigartige Talent, Deinen individuellen Stil mit ein paar wenigen gekonnten Handgriffen völlig zu verändern. Dunkle Augen und rote Lippen für das Abend Make-up oder tagsüber ein alltagstaugliches dezentes Nude Make-up: Geschickt ausgewählt und aufgetragen gibt Dir Dein Make-up ein großartiges Gefühl.</p>

          <h5>Wie schminke ich mich richtig? 5 Schritte zum perfekten Make-up</h5>
          <ul>
            <li><strong>Schritt 1: Tagespflege</strong> Für eine ebenmäßige Foundation ist wichtig, dass die Haut frei von Schüppchen und trockenen Hautstellen ist. Die Haut mit Pflege und Feuchtigkeit zu verwöhnen ist deshalb der erste Schritt zum perfekten Make-up. Eine feuchtigkeitsspendende Tagescreme, ein Fluid oder ein Serum mit leichter, schnell einziehender Textur bieten sich als Teint Grundierung an. Kurz einwirken lassen und die überschüssige Textur mit einem weichen Kosmetiktuch abnehmen. Wenn Du Rötungen, Pigmentflecken und Sommersprossen bereits während der Pflege kaschieren möchtest, verwende eine getönte Tagescreme oder Feuchtigkeitspflege abgestimmt auf deine Hautfarbe.</li>
            <li><strong>Schritt 2: Teint Make-up</strong> Die M. Asam MAGIC FINISH Make-up Mousse ist Primer, Teint Make-up, Concealer und Puder in einem. Es gleicht sich dem individuellen Hautton an. Unkompliziert mit den Fingerspitzen über das Gesicht auftragen. An den Übergängen weich ausblenden. Tipp: Wenn Du sehr unebene Haut hast, grundiere Dein Gesicht vor dem Teint Make-up zusätzlich mit einem Make-up Primer. Um dem Gesicht einen Hauch natürlicher Frische zu verleihen, Rouge mit einem fluffigen Blusher Pinsel auf den Wangenknochen verteilen.</li>
            <li><strong>Schritt 3: Augen Make-up</strong> Bei öligen Augenlidern tupfst Du zuerst mit einem Kosmetiktuch überschüssigen Talg ab. Um Lidschatten und Eyeliner langanhaltender zu machen, grundiere Deine Augenlider mit einer Make-up Base. Anschließend die Augen mit Lidschatten veredeln und mit einem Eyeliner betonen. Für einen ausdrucksstarken Augenaufschlag tuschst Du Deine Wimpern mit Mascara in intensivem Tiefschwarz.</li>
            <li><strong>Schritt 4: Augenbrauen Make-up</strong> Die Augenbrauen zupfst Du mit einer schlanken Pinzette in Form. Zu runden Gesichtern passen markant gehaltene Brauen mit einem eher kantigen Bogen. Eckige Gesichtsformen schmücken weiche, runde Augenbrauen. Mit einem Konturstift die Brauen in ihrer Wuchsrichtung in feinen Strichen nachzeichnen, um einen natürlich schönen Look zu definieren.</li>
            <li><strong>Schritt 5: Lippen Make-up</strong> Für eine perfekte Form die Lippenkontur mit einem Lip Liner exakt umranden. Setze Deine Lippen anschließend mit einem Lippenstift in Szene. Wenn Du Dir einen subtilen Look wünschst, schenke Deinen Lippen mit Lippenbalsam einen gepflegten natürlichen Glanz. Tipp: Noch farbintensiver und strahlender wirkt der Lippenstift, wenn Du Deine Lippen mit Mousse-Foundation dünn grundierst. Das neutralisiert die natürliche Lippenfarbe.</li>
          </ul>

          <h5>Wie entferne ich Make-up am besten?</h5>
          <p>Sich vor dem Schlafengehen abzuschminken ist ein unverzichtbarer Bestandteil der täglichen Beauty-Routine. Denn frei von Make-up entfaltet die Haut in der Nacht ihre volle Regenerationskraft, erneuert Zellen und erholt sich. Der M. Asam MAGIC FINISH Make-up Entferner reinigt die Haut sanft und effektiv mit Mizellen-Technologie. Er schützt die Haut mit Traubenstammzellen und versorgt sie dank Hyaluron mit wichtiger Feuchtigkeit.</p>

          <h5>Das perfekte Make-up für jeden Hauttyp</h5>
          <p>Da jede Haut einzigartig ist, gibt es für die verschiedensten Ansprüche unterschiedliche Kosmetik. Nicht nur bei unserer pflegenden asambeauty Kosmetik gehen wir auf Deine individuellen Bedürfnisse ein. Deshalb haben wir für verschiedene Hauttypen das passende Make-up entwickelt. In Kombination mit unserer Hautpflege kreierst Du einen ebenmäßigen Teint und ein strahlendes Hautbild.</p>
          
          <h6>MAGIC FINISH - unser Make-up Bestseller von M. Asam</h6>
          <p>MAGIC FINISH, unser internationaler Bestseller, passt sich als luftig, zarte Mousse perfekt jedem Hautton an und mattiert das Hautbild. Das Make-up eignet sich optimal für Schmink-Anfänger, da Du nicht zwischen 100 verschiedenen Farbnuancen wählen musst. Unregelmäßigkeiten werden perfekt kaschiert und das Hautbild sieht wunderbar ebenmäßig aus.</p>
          <button data-expanded={finePrintExpanded} onClick={() => setFinePrintExpanded(curr => !curr)}>{finePrintExpanded ? "Weniger" : "Mehr"} Anzeigen</button>
        </Container>
      </section>

      <section className={styles.Newsletter}>
          <h2>Newsletter abonnieren</h2>
          <p>Erhalte News zu Produkten und exklusiven Angeboten und sichere Dir <strong>5 € Willkommens-Rabatt</strong> auf Deine erste Bestellung.</p>
          <form onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Gib' hier Deine E-mail Adresse ein" />
            <button>Anmelden</button>
          </form>
          <p>Mit dem Anklicken des Buttons „Anmelden“ möchte ich regelmäßig über ausgewählte Angebote und Produkte von ASAMBEAUTY per Email informiert werden. Ich kann meine Einwilligung jederzeit für die Zukunft widerrufen, z.B. durch Anklicken des Abmeldelinks im Newsletter oder in meinem Kundenkonto. Bitte beachte unsere <a href="#">Allgemeinen Geschäftsbedingungen</a> und <a href="#">Datenschutzbestimmungen.</a></p>
      </section>

      <section className={styles.Perks}>
        <Container>
          <ul>
            <li>
              <img src="https://www.asambeauty.com/static/media/sprites.8f043c67.svg#preFooterSafety" width={48} height={48} alt="credit card and lock" />
              <p>Einfache & sichere Zahlung</p>
            </li>
            <li>
              <img src="https://www.asambeauty.com/static/media/sprites.8f043c67.svg#preFooterDelivery" width={48} height={48} alt="van moving right" />
              <p>Schnelle Lieferung</p>
            </li>
            <li>
              <img src="https://www.asambeauty.com/static/media/sprites.8f043c67.svg#preFooterRefund" width={48} height={48} alt="circular arrow with 30 inside" />
              <p>30 Tage Rückgaberecht</p>
            </li>
            <li>
              <img src="https://www.asambeauty.com/static/media/sprites.8f043c67.svg#preFooterBuy" width={48} height={48} alt="receipt" />
              <p>Kauf auf Rechnung</p>
            </li>
          </ul>
        </Container>
      </section>

      <section className={styles.Map}>
        <div>
          <div>
            <h5 data-icon="⮟" onClick={toggleMapItem} id="map-ueber">Über Asambeauty</h5>
            <ul>
              <li><a href="#">Markenwelt</a></li>
              <li><a href="#">Nachhaltigkeit</a></li>
              <li><a href="#">Magazin</a></li>
              <li><a href="#">Deine Vorteile</a></li>
              <li><a href="#">Pflegelinien & Technologien</a></li>
              <li><a href="#">Unternehmensgeschichte</a></li>
              <li><a href="#">Drogerie</a></li>
              <li><a href="#">Karriere</a></li>
              <li><a href="#">Vertriebspartner</a></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">TV-Sendetermine</a></li>
              <li><a href="#">Presse</a></li>
            </ul>
          </div>

          <div>
            <h5 data-icon="⮟" onClick={toggleMapItem} id="map-kunden">Kundenservice</h5>
            <ul>
              <li><a href="#">Telefonische Produktberatung</a></li>
              <li><a href="#">Bestell-Hotline</a></li>
              <li><a href="#">Kontaktformular</a></li>
              <li><a href="#">Hilfe & FAQ</a></li>
              <li><a href="#">Freunde werben Freunde</a></li>
              <li><a href="#">Gutschein Kaufen</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Mein Kundenkonto</a></li>
              <li><a href="#">Bestellung</a></li>
              <li><a href="#">Zahlungsarten</a></li>
              <li><a href="#">Lieferung & Versand</a></li>
            </ul>
          </div>

          <div>
            <h5 data-icon="⮟" onClick={toggleMapItem} id="map-versand">Versand</h5>
            <ul>
              <li><img src="https://assets.asambeauty.com/static/media/sprites.8f043c67.svg#dhl" width={155} height={34} alt="dhl" /></li>
            </ul>

            <h5 data-icon="⮟" onClick={toggleMapItem} id="map-international">International</h5>
            <ul>
              <li><a href="#">Deutschland</a></li>
              <li><a href="#">Schweiz</a></li>
              <li><a href="#">Frankreich</a></li>
              <li><a href="#">United States</a></li>
              <li><a href="#">Polen</a></li>
            </ul>
          </div>

          <div>
            <h5 data-icon="⮟" onClick={toggleMapItem} id="map-bezahlen">Bequem Bezahlen</h5>
            <ul className={styles.PaymentMethods}>
              <li><img src="https://assets.asambeauty.com/static/media/sprites.8f043c67.svg#mastercard" width={53} height={32} alt="mastercard" /></li>
              <li><img src="https://assets.asambeauty.com/static/media/sprites.8f043c67.svg#visa" width={53} height={32} alt="visa" /></li>
              <li><img src="https://assets.asambeauty.com/static/media/sprites.8f043c67.svg#amex" width={53} height={32} alt="amex" /></li>
              <li><img src="https://assets.asambeauty.com/static/media/sprites.8f043c67.svg#paypal" width={53} height={32} alt="paypal" /></li>
              <li><img src="https://assets.asambeauty.com/static/media/sprites.8f043c67.svg#amazon" width={53} height={32} alt="amazon pay" /></li>
              <li><img src="https://assets.asambeauty.com/static/media/sprites.8f043c67.svg#rechnung" width={53} height={32} alt="rechnung" /></li>
              <li><img src="https://assets.asambeauty.com/static/media/sprites.8f043c67.svg#vorkasse" width={53} height={32} alt="vorkasse" /></li>
            </ul>

            <h5 data-icon="⮟" onClick={toggleMapItem} id="map-sicherung">Sichere Einkaufen</h5>
            <ul>
              <li><a href="#"><img src="https://assets.asambeauty.com/static/media/sprites.8f043c67.svg#trustedshops" width={50} height={50} /></a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.FinalSection}>
        <Container>
          <ul>
            <li className={styles.Info}><a href="#">Impressum</a></li>
            <li className={styles.Info}><a href="#">Datenschutz</a></li>
            <li className={styles.Info}><a href="#">AGB</a></li>
            <li className={styles.Info}><a href="#">Widerruf</a></li>
            <li className={styles.Info}><a href="#">Cookies</a></li>
          </ul>
          <img className={styles.Logo} width={48} height={43} src="https://www.asambeauty.com/static/media/sprites.8f043c67.svg#small_logo" alt="asambeauty compact logo" />
          
          <div>
            <h5>Folgt uns auf</h5>
            <ul>
              <li className={styles.Social}><a href="#"><img src={socialYT} width={32} height={32} alt="asambeauty on youtube" /></a></li>
              <li className={styles.Social}><a href="#"><img src={socialFB} width={32} height={32} alt="asambeauty on facebook" /></a></li>
              <li className={styles.Social}><a href="#"><img src={socialIG} width={32} height={32} alt="asambeauty on instagram" /></a></li>
              <li className={styles.Social}><a href="#"><img src={socialPT} width={32} height={32} alt="asambeauty on pinterest" /></a></li>
            </ul>
          </div>

          <p>© 2022 ASAMBEAUTY GmbH. Alle Rechte vorbehalten.</p>
          <small>*Alle Preise werden inkl. der gesetzlichen Mehrwertsteuer angegeben. Versandkostenfreie Lieferung in Deutschland und Österreich ab 39 € Bestellsumme, sonst 5,95 € innerhalb von Deutschland und Österreich. Weitere Informationen zur Lieferung und zu unseren Versandkosten findest Du <a href="#">hier</a>.</small>
        </Container>
      </section>
    </footer>
  )
}