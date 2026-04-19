// Unskippable Climate; content.js
(function () {

  const FACTS = [
    // FORESTS
    { text: "Since 1990, the world has lost 420 million hectares of forest; an area larger than the European Union.", source: "https://www.fao.org/state-of-forests/en/" },
    { text: "Tropical forests once covered 12% of Earth's land. Today they cover around 5%.", source: "https://www.globalforestwatch.org" },
    { text: "The world loses approximately 10 million hectares of forest per year; down from 16 million in 1990, but from a much smaller remaining base.", source: "https://www.fao.org/state-of-forests/en/" },
    // AGRICULTURE
    { text: "Half of all habitable land on Earth is used for agriculture; and 77% of that agricultural land is dedicated to livestock.", source: "https://ourworldindata.org/global-land-for-agriculture" },
    { text: "77% of agricultural land is used for livestock; yet animal products provide only 18% of the world's calories.", source: "https://science.sciencemag.org/content/360/6392/987" },
    { text: "Agricultural expansion drives up to 90% of global tropical deforestation.", source: "https://www.fao.org/sustainability/news/detail/en/c/1274219/" },
    { text: "A third of the world's agricultural land has been degraded by erosion in the past 40 years.", source: "https://www.theguardian.com/environment/2015/dec/02/arable-land-soil-food-security-erosion" },
    { text: "Three-quarters of the world's crop species depend on pollinators; insects underpin 35% of global food production, including most fruits, nuts, and vegetables.", source: "https://www.ipbes.net/assessment-reports/pollinators" },
    { text: "Approximately 40% of invertebrate pollinator species; including bees and butterflies; are currently at risk of extinction.", source: "https://www.ipbes.net/assessment-reports/pollinators" },
    { text: "The global economic value of pollination services is estimated at $235–577 billion annually; provided almost entirely by wild and managed insects now in steep decline.", source: "https://www.ipbes.net/assessment-reports/pollinators" },
    // WATER
    { text: "21 of the world's 37 largest aquifers are being depleted faster than they can naturally replenish.", source: "https://agupubs.onlinelibrary.wiley.com/doi/10.1002/2015WR017349" },
    { text: "Agriculture accounts for around 70% of all freshwater withdrawals globally; livestock accounts for roughly 30% of that footprint while occupying 77% of agricultural land.", source: "https://www.fao.org/aquastat/en/" },
    { text: "The Ogallala Aquifer; which irrigates 30% of all US groundwater-fed agriculture; took millions of years to fill and is being drained in decades.", source: "https://www.scientificamerican.com/article/ogallala-aquifer/" },
    // WILDLIFE
    { text: "Monitored wildlife populations have declined by an average of 73% since 1970.", source: "https://livingplanet.panda.org/" },
    { text: "Freshwater species populations have declined by 85% on average since 1970; the sharpest collapse of any habitat type on Earth.", source: "https://livingplanet.panda.org/" },
    // CLIMATE
    { text: "The last decade (2014–2023) was the hottest ever recorded.", source: "https://climate.nasa.gov/vital-signs/global-temperature/" },
    { text: "Global sea levels have risen 21–24cm since 1880, with the rate of rise doubling since 2006.", source: "https://climate.nasa.gov/vital-signs/sea-level/" },
    { text: "The number of recorded climate disasters has increased fivefold over the past 50 years.", source: "https://public.wmo.int/en/media/press-release/wmo-atlas-of-mortality-and-economic-losses" },
    { text: "CO₂ levels in the atmosphere are now higher than at any point in at least 800,000 years.", source: "https://climate.nasa.gov/vital-signs/carbon-dioxide/" },
    // OCEANS
    { text: "The 2023–2025 global coral bleaching event; the fourth ever recorded and the most severe in history; impacted 84% of the world's reefs across 82 countries and territories.", source: "https://coralreefwatch.noaa.gov/" },
    { text: "During the first global bleaching event in 1998, 21% of reefs were affected. In 2025, it was 84%.", source: "https://coralreefwatch.noaa.gov/" },
    { text: "Around 8 million tonnes of plastic enter the world's oceans every year.", source: "https://www.science.org/doi/10.1126/science.1260352" },
    { text: "Only 9% of all plastic waste produced globally has ever been recycled.", source: "https://www.ecowatch.com/" },
    { text: "In the United States, the plastic recycling rate is just 5%; despite decades of consumer recycling campaigns.", source: "https://www.ecowatch.com/" },
    // FOOD SYSTEMS
    { text: "The world needs to produce roughly 60% more food by 2050 to feed a projected population of 9.6 billion; yet climate change is simultaneously reducing our capacity to do so.", source: "https://www.nature.com/" },
    { text: "Every additional degree Celsius of warming reduces global food production capacity by approximately 120 calories per person per day.", source: "https://www.nature.com/" },
    { text: "Climate change is projected to reduce global staple crop yields by 8% by 2050 regardless of future emissions; and by 24% by 2100 under a high-emissions scenario.", source: "https://www.nature.com/" },
    { text: "72% of the world's staple crops are grown in just 5 countries; a synchronized failure across maize, wheat, soybeans, and rice could become possible every 11 years by mid-century.", source: "https://www.woodwellclimate.org/" },
    // HEALTH
    { text: "Microplastics have now been detected in human blood, lungs, placentas, and breast milk.", source: "https://www.nejm.org/doi/full/10.1056/NEJMoa2309822" },
    { text: "A 2024 study found microplastic particles in arterial plaque; patients with higher concentrations had a significantly elevated risk of heart attack and stroke.", source: "https://www.nejm.org/doi/full/10.1056/NEJMoa2309822" },
    { text: "Atmospheric CO₂ concentrations are projected to reach levels that measurably impair human cognitive function within 50 years; levels already regularly exceeded in poorly ventilated buildings today.", source: "https://link.springer.com/article/10.1007/s11869-026-01918-5" },
    // PROGRESS
    { text: "The cost of solar power has fallen by 90% in the last decade; the fastest cost decline of any energy source in history.", source: "https://www.iea.org/reports/world-energy-outlook-2023" },
    { text: "The ozone layer is on track to fully recover by 2066, thanks to the 1987 Montreal Protocol; the most successful international environmental agreement ever reached.", source: "https://ozone.unep.org/science/assessment/sap" },
    { text: "Global renewable energy capacity grew by 50% in 2023; the fastest rate in 20 years.", source: "https://www.iea.org/reports/renewables-2023" },
    { text: "Protected land areas have grown from 10% to 17% of Earth's land surface since 1990, with an international target of 30% by 2030.", source: "https://www.protectedplanet.net/en" },
    // 2025
    { text: "2025 became the first full calendar year on record to exceed 1.5°C of warming above pre-industrial levels; the threshold set by the Paris Agreement.", source: "https://climate.copernicus.eu/" },
    { text: "The International Court of Justice declared in 2025 that nations have legally binding obligations to prevent climate harm; a landmark shift in international climate law.", source: "https://www.icj-cij.org/" },
    { text: "Global negotiations for a legally binding plastics treaty collapsed in 2025, leaving no international framework to halt the 8 million tonnes of plastic entering the ocean each year.", source: "https://www.unep.org/" },
    { text: "For the first time, scientists formally attributed specific heatwave deaths to named fossil fuel companies; opening the door to direct legal liability.", source: "https://www.worldweatherattribution.org/" },
    { text: "The UN High Seas Treaty entered ratification in 2025; the first legal framework ever to govern the high seas, which cover nearly half the planet.", source: "https://www.un.org/bbnjagreement" },
    { text: "Green sea turtle nesting populations rebounded significantly in 2025; a rare conservation success story driven by decades of international protection efforts.", source: "https://earth.org/" },
  ];

  let factIndex = 0;
  function getNextFact() {
    const fact = FACTS[factIndex % FACTS.length];
    factIndex++;
    return fact;
  }

  // Load position preference; default bottom
  let preferredPosition = 'bottom';
  chrome.storage.sync.get('position', (result) => {
    if (result.position) preferredPosition = result.position;
  });

  function buildFactHTML(fact, position) {
    const brandHTML =
      `<div style="margin-bottom:5px;">` +
        `<span style="font-family:'Arial Black',Impact,'Helvetica Neue',Arial,sans-serif;` +
                     `font-size:13px;font-weight:900;letter-spacing:0.28em;text-transform:uppercase;` +
                     `display:inline-block;transform:scaleY(0.58);transform-origin:bottom left;` +
                     `color:#b0b0b0;line-height:1;">UNSKIPPABLE</span>` +
      `</div>`;

    const factHTML =
      `<span style="font-family:Arial,sans-serif;font-size:12px;color:#555;">` +
        `🌍 ${fact.text} ` +
        `<a href="${fact.source}" target="_blank" ` +
           `style="color:#1a73e8;text-decoration:none;font-size:11px;">↗ source</a>` +
      `</span>`;

    const block =
      `<div data-uc="1" style="padding:10px 0;border-top:1px solid #e0e0e0;font-family:Arial,sans-serif;">` +
        brandHTML + factHTML +
      `</div>`;

    return position === 'top' ? block + '<br>' : '<br>' + block;
  }

  // Silent DOM inject; no focus stealing, just visual
  function injectSilent(body, fact, position) {
    const old = body.querySelector('[data-uc]');
    if (old) old.remove();

    // Save cursor so inserting into the DOM doesn't move it
    const sel = window.getSelection();
    let savedRange = null;
    if (sel && sel.rangeCount > 0 && body.contains(sel.getRangeAt(0).commonAncestorContainer)) {
      savedRange = sel.getRangeAt(0).cloneRange();
    }

    const html = buildFactHTML(fact, position);
    if (position === 'top') {
      body.insertAdjacentHTML('afterbegin', html);
    } else {
      body.insertAdjacentHTML('beforeend', html);
    }

    // Restore cursor to where it was
    if (savedRange) {
      sel.removeAllRanges();
      sel.addRange(savedRange);
    }
  }

  // execCommand inject; used only on send so Gmail captures it properly
  function injectOnSend(body, fact, position) {
    const old = body.querySelector('[data-uc]');
    if (old) old.remove();

    const savedActive = document.activeElement;

    body.focus();
    const sel = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(body);
    range.collapse(position !== 'top'); // false = collapse to start (top), true = end (bottom)
    sel.removeAllRanges();
    sel.addRange(range);

    document.execCommand('insertHTML', false, buildFactHTML(fact, position));

    if (savedActive && savedActive !== body) savedActive.focus();
  }

  const seen = new WeakSet();

  function tryInject(body) {
    if (seen.has(body)) return;
    seen.add(body);
    setTimeout(() => injectSilent(body, getNextFact(), preferredPosition), 400);
  }

  // Watch for compose bodies
  const observer = new MutationObserver(() => {
    document.querySelectorAll('div[aria-label="Message Body"]').forEach(body => {
      tryInject(body);
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // On send: re-inject via execCommand so it survives Gmail's serialisation
  document.addEventListener('click', (e) => {
    const isSend =
      e.target.closest('[data-tooltip*="Send"]') ||
      e.target.closest('[aria-label*="Send"]');
    if (!isSend) return;

    const body = document.querySelector('div[aria-label="Message Body"]');
    if (!body) return;

    injectOnSend(body, getNextFact(), preferredPosition);
  }, true);

  // Listen for position changes from popup
  chrome.storage.onChanged.addListener((changes) => {
    if (changes.position) {
      preferredPosition = changes.position.newValue;
    }
  });

})();
