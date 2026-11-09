export type EvidenceEntry={
  id:string; category:'antihypertensive'|'wearable'; title:string; label:string;
  population:string; finding:string; limitations:string; certainty:string;
  sourceTitle:string; sourceUrl:string; year:number;
};

export const evidenceEntries:EvidenceEntry[]=[
  {
    id:'time-trial',category:'antihypertensive',title:'TIME study · morning vs evening',label:'Randomized clinical trial',year:2022,
    population:'21,104 adults with treated hypertension in the UK; usual medicines were assigned to morning (06:00–10:00) or evening (20:00–00:00) use.',
    finding:'The trial found no significant difference in major cardiovascular outcomes between the assigned morning and evening groups (hazard ratio 0.95; 95% CI 0.83–1.10; p=0.53).',
    limitations:'This was a population-level comparison of usual antihypertensive medicines, not a wearable-guided or personalized timing study. It does not establish an optimal time for an individual medicine or person.',
    certainty:'Large pragmatic randomized trial; supports no universal evening advantage in this study population.',
    sourceTitle:'Lancet / PubMed record',sourceUrl:'https://pubmed.ncbi.nlm.nih.gov/36240838/'
  },
  {
    id:'bedmed-trial',category:'antihypertensive',title:'BedMed · bedtime vs morning',label:'Randomized clinical trial',year:2025,
    population:'3,357 community-dwelling adults with hypertension in Canadian primary care, assigned to bedtime or morning use of once-daily antihypertensive medicines.',
    finding:'Bedtime administration did not reduce cardiovascular events or death compared with morning administration (adjusted hazard ratio 0.96; 95% CI 0.77–1.19; p=0.70).',
    limitations:'The result is about a group-level timing comparison, not personalized scheduling. It does not apply automatically to every drug, condition, or patient.',
    certainty:'Pragmatic randomized trial; reinforces that a universal bedtime advantage was not demonstrated.',
    sourceTitle:'JAMA / full trial report',sourceUrl:'https://jamanetwork.com/journals/jama/fullarticle/2833860'
  },
  {
    id:'wearable-phase-study',category:'wearable',title:'Ambulatory signals compared with DLMO',label:'Small validation study',year:2014,
    population:'13 participants monitored for 10 days using wrist temperature, movement, arm position and light exposure; estimates were compared with dim-light melatonin onset (DLMO).',
    finding:'The study explored whether a combination of ambulatory measurements could estimate circadian phase under its study conditions.',
    limitations:'A small validation study is not a general-purpose clinical algorithm. A CSV containing sleep, HRV or skin temperature alone cannot reproduce this protocol or establish a person’s biological phase.',
    certainty:'Exploratory validation in a small sample; not evidence for a consumer medication-timing recommendation.',
    sourceTitle:'PubMed study record',sourceUrl:'https://pubmed.ncbi.nlm.nih.gov/24164100/'
  }
];

export const unverifiedMedicationNote='Evidence not verified. No personalized timing interpretation is available.';
