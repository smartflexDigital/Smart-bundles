// ============================================
// SMART BUNDLES — SALE CONFIG
// Badilisha hapa tu — hakuna mahali pengine
// ============================================

window.SALE_CONFIG = {

    // Weka true kuanza sale, false kuizima
    active: true,

    // Jina la sale (linaonekana kwenye banner)
    title: "🔥 Flash Sale ya Leo!",

    // Ujumbe mfupi chini ya title
    subtitle: "Bei zimepunguzwa kwa muda mfupi tu",

    // Muda wa kuisha (ISO format) — badilisha hii ukitaka
    // Mfano: "2025-12-31T23:59:00" = Desemba 31 saa 11 usiku
    // Ili kuiweka masaa 6 kutoka sasa, hesabu mwenyewe
    endsAt: "2025-06-15T18:00:00",

    // Bei maalum za Tigo wakati wa sale (GB kubwa tu)
    // GB 1-20 zinabaki bei ya kawaida
    // Ongeza au punguza packages hapa
    tigoPrices: {
        "25GB": { original: 44000, sale: 40000 },
        "30GB": { original: 52000, sale: 47000 },
        "40GB": { original: 68000, sale: 62000 },
        "50GB": { original: 85000, sale: 78000 },
        "60GB": { original: 100000, sale: 92000 },
        "75GB": { original: 122000, sale: 112000 },
        "100GB": { original: 105000, sale: 97000 }
    }
};
